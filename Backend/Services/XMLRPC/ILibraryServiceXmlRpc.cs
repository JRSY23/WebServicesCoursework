﻿using Horizon.XmlRpc.Core;
using LibraryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CourseWork.Services.XMLRPC
{
    interface ILibraryServiceXmlRpc
    {
        #region Books
        [XmlRpcMethod("GetBooks")]
        Book[] GetBooks();

        [XmlRpcMethod("GetBookInfo")]
        BooksInfo[] GetBookInfo();

        [XmlRpcMethod("PostBook")]
        HttpStatusCode PostBook(Book book);
        #endregion

        #region LibraryAccounting
        [XmlRpcMethod("GetLibraryAccounting")]
        LibraryAccounting[] GetLibraryAccounting();

        [XmlRpcMethod("GetLibraryAccountingInfo")]
        LibraryAccountingInfo[] GetLibraryAccountingInfo();

        [XmlRpcMethod("PostLibraryAccounting")]
        HttpStatusCode PostLibraryAccounting(LibraryAccounting libraryAccounting);
        #endregion

        #region LibraryAccount
        [XmlRpcMethod("GetLibraryAccounts")]
        LibraryAccount[] GetLibraryAccounts();

        [XmlRpcMethod("GetAccountsInfo")]
        AccountInfo[] GetAccountsInfo();

        [XmlRpcMethod("PostLibraryAccount")]
        HttpStatusCode PostLibraryAccount(LibraryAccount libraryAccount);
        #endregion

        #region GetPenaltiesAccounting
        [XmlRpcMethod("GetPenaltiesAccounting")]
        PenaltiesAccounting[] GetPenaltiesAccounting();

        [XmlRpcMethod("GetPenaltiesAccountingsInfo")]
        PenaltiesAccountingsInfo[] GetPenaltiesAccountingsInfo();

        [XmlRpcMethod("PostPenaltiesAccounting")]
        HttpStatusCode PostPenaltiesAccounting(PenaltiesAccounting penaltiesAccounting);
        #endregion

        #region Penalty
        [XmlRpcMethod("GetPenalties")]
        Penalty[] GetPenalties();

        [XmlRpcMethod("PostPenalty")]
        HttpStatusCode PostPenalty(Penalty penalty);
        #endregion
    }
}
