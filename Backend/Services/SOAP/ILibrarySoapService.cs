using LibraryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.ServiceModel;
using System.Threading.Tasks;

namespace CourseWork.Services.SOAP
{
    [ServiceContract]
    interface ILibrarySoapService
    {
        #region Books
        [OperationContract]
        Book[] GetBooks();

        [OperationContract]
        BooksInfo[] GetBookInfo();

        [OperationContract]
        HttpStatusCode PostBook(Book book);
        #endregion

        #region LibraryAccounting
        [OperationContract]
        LibraryAccounting[] GetLibraryAccounting();

        [OperationContract]
        LibraryAccountingInfo[] GetLibraryAccountingInfo();

        [OperationContract]
        HttpStatusCode PostLibraryAccounting(LibraryAccounting libraryAccounting);
        #endregion

        #region LibraryAccount
        [OperationContract]
        LibraryAccount[] GetLibraryAccounts();

        [OperationContract]
        AccountInfo[] GetAccountsInfo();

        [OperationContract]
        HttpStatusCode PostLibraryAccount(LibraryAccount libraryAccount);
        #endregion

        #region GetPenaltiesAccounting
        [OperationContract]
        PenaltiesAccounting[] GetPenaltiesAccounting();

        [OperationContract]
        PenaltiesAccountingsInfo[] GetPenaltiesAccountingsInfo();

        [OperationContract]
        HttpStatusCode PostPenaltiesAccounting(PenaltiesAccounting penaltiesAccounting);
        #endregion

        #region Penalty
        [OperationContract]
        Penalty[] GetPenalties();

        [OperationContract]
        HttpStatusCode PostPenalty(Penalty penalty);
        #endregion
    }
}
