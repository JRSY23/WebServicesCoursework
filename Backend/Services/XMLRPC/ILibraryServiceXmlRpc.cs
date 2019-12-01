using Horizon.XmlRpc.Core;
using LibraryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseWork.Services.XMLRPC
{
    interface ILibraryServiceXmlRpc
    {
        [XmlRpcMethod("GetBooks")]
        IEnumerable<Book> GetBooks();

        [XmlRpcMethod("GetBookInfo")]
        IEnumerable<BooksInfo> GetBookInfo();
    }
}
