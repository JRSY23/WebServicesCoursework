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
        #region Books
        [XmlRpcMethod("GetBooks")]
        Book[] GetBooks();

        [XmlRpcMethod("GetBookInfo")]
        BooksInfo[] GetBookInfo();
        #endregion

        #region LibraryAccounting
        [XmlRpcMethod("GetLibraryAccounting")]
        LibraryAccounting[] GetLibraryAccounting();

        [XmlRpcMethod("GetLibraryAccountingInfo")]
        LibraryAccountingInfo[] GetLibraryAccountingInfo();
        #endregion

        #region LibraryAccount
        [XmlRpcMethod("GetLibraryAccounts")]
        LibraryAccount[] GetLibraryAccounts();

        [XmlRpcMethod("GetAccountsInfo")]
        AccountInfo[] GetAccountsInfo();
        #endregion

        #region GetPenaltiesAccounting
        [XmlRpcMethod("GetPenaltiesAccounting")]
        PenaltiesAccounting[] GetPenaltiesAccounting();

        [XmlRpcMethod("GetPenaltiesAccountingsInfo")]
        PenaltiesAccountingsInfo[] GetPenaltiesAccountingsInfo();
        #endregion

        #region Penalty
        [XmlRpcMethod("GetPenalties")]
        Penalty[] GetPenalties();
        #endregion
    }
}
