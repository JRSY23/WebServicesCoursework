using Horizon.XmlRpc.Core;
using Horizon.XmlRpc.Server;
using LibraryApi.DAL;
using LibraryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Xml;

namespace CourseWork.Services.XMLRPC
{
    public class LibraryServiceXmlRpc : XmlRpcListenerService, ILibraryServiceXmlRpc
    {
        public LibraryServiceXmlRpc()
        {
        }

        #region Books
        public IEnumerable<Book> GetBooks()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.Books.ToList();
            }
        }

        public IEnumerable<BooksInfo> GetBookInfo()
        {
            using (var _context = LibraryContext.Create())
            {
                var booksInfo = _context.Books.Select(x => new BooksInfo
                {
                    BookID = x.BookID,
                    BookData = $"{x.Name}| {x.Author}| {x.IssueDate.Date}"
                }).ToList();

                return booksInfo;
            }
        }

        #endregion

        public override void ProcessRequest(HttpListenerContext RequestContext)
        {
            // base.ProcessRequest(RequestContext);
            try
            {
                IHttpRequest req = new XmlRpcListenerRequest(RequestContext.Request);
                IHttpResponse resp = new XmlRpcListenerResponse(RequestContext.Response);
                HandleHttpRequestMy(req, resp);
            }
            catch (Exception ex)
            {
                // "Internal server error"
                RequestContext.Response.StatusCode = 500;
                RequestContext.Response.StatusDescription = ex.Message;
            }
            finally
            {
                RequestContext.Response.OutputStream.Close();
            }

        }

        public void HandleHttpRequestMy(IHttpRequest httpReq, IHttpResponse httpResp)
        {
            // GET has its own handler because it can be used to return a 
            // HTML description of the service
            if (httpReq.HttpMethod == "GET")
            {
                XmlRpcServiceAttribute svcAttr = (XmlRpcServiceAttribute)
                  Attribute.GetCustomAttribute(GetType(), typeof(XmlRpcServiceAttribute));
                if (svcAttr != null && svcAttr.AutoDocumentation == false)
                {
                    HandleUnsupportedMethod(httpReq, httpResp);
                }
                else
                {
                    bool autoDocVersion = true;
                    if (svcAttr != null)
                        autoDocVersion = svcAttr.AutoDocVersion;
                    HandleGET(httpReq, httpResp, autoDocVersion);
                }
                return;
            }
            if (httpReq.HttpMethod == "OPTIONS")
            {
                HandleOPTIONS(httpReq, httpResp);
                return;
            }
            // calls on service methods are via POST
            if (httpReq.HttpMethod != "POST")
            {
                HandleUnsupportedMethod(httpReq, httpResp);
                return;
            }
            //Context.Response.AppendHeader("Server", "XML-RPC.NET");
            // process the request
            Stream responseStream = Invoke(httpReq.InputStream);
            httpResp.ContentType = "text/xml";
            httpResp.ContentLength = responseStream.Length;

            Stream respStm = httpResp.OutputStream;
            Util.CopyStream(responseStream, respStm);
            respStm.Flush();
        }

        protected void HandleGET(IHttpRequest httpReq, IHttpResponse httpResp, bool autoDocVersion)
        {
            using (MemoryStream stm = new MemoryStream())
            {
                using (var wrtr = new XmlTextWriter(new StreamWriter(stm)))
                {
                    XmlRpcDocWriter.WriteDoc(wrtr, this.GetType(), autoDocVersion);
                    wrtr.Flush();
                    httpResp.ContentType = "text/html";
                    httpResp.ContentLength = stm.Length;

                    stm.Position = 0;
                    Stream respStm = httpResp.OutputStream;
                    Util.CopyStream(stm, respStm);
                    respStm.Flush();
                    httpResp.StatusCode = 200;
                }
            }
        }

        protected void HandleOPTIONS(IHttpRequest httpReq, IHttpResponse httpResp)
        {
            httpResp.StatusCode = 200;
        }

        protected void HandleUnsupportedMethod(IHttpRequest httpReq, IHttpResponse httpResp)
        {
            // RFC 2068 error 405: "The method specified in the Request-Line   
            // is not allowed for the resource identified by the Request-URI. 
            // The response MUST include an Allow header containing a list 
            // of valid methods for the requested resource."
            //!! add Allow header
            httpResp.StatusCode = 405;
            httpResp.StatusDescription = "Unsupported HTTP verb";
        }


    }
}
