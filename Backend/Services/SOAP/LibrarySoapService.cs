using LibraryApi.DAL;
using LibraryApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.ServiceModel;
using System.Threading.Tasks;

namespace CourseWork.Services.SOAP
{
    public class LibrarySoapService : ILibrarySoapService
    {

        #region Books
        public Book[] GetBooks()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.Books.ToArray();
            }
        }

        public BooksInfo[] GetBookInfo()
        {
            using (var _context = LibraryContext.Create())
            {
                var booksInfo = _context.Books.Select(x => new BooksInfo
                {
                    BookID = x.BookID,
                    BookData = $"{x.Name}| {x.Author}| {x.IssueDate.Date}"
                }).ToArray();

                return booksInfo;
            }
        }

        public HttpStatusCode PostBook([FromBody]Book book)
        {
            using (var _context = LibraryContext.Create())
            {
                try
                {
                    _context.Books.Add(book);
                    _context.SaveChangesAsync();

                    return HttpStatusCode.Created;
                }
                catch (Exception)
                {
                    return HttpStatusCode.NoContent;
                }
            }
        }
        #endregion

        #region LibraryAccounting
        public LibraryAccounting[] GetLibraryAccounting()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.LibraryAccounting.ToArray();
            }
        }
        public LibraryAccountingInfo[] GetLibraryAccountingInfo()
        {
            using (var _context = LibraryContext.Create())
            {
                var accountsInfo = _context.LibraryAccounting
                .Join(
                    _context.LibraryAccounts,
                    libraryAccountings => libraryAccountings.AccountID,
                    libraryAccounts => libraryAccounts.AccountID,
                    (libraryAccountings, libraryAccounts) => new
                    {
                        libraryAccountings,
                        libraryAccounts
                    })
                .Join(
                    _context.Books,
                    libraryAccountings => libraryAccountings.libraryAccountings.BookID,
                    books => books.BookID,
                    (libraryAccountings, books) => new
                    {
                        libraryAccountings,
                        books
                    })
                .Select(libraryAccountingsInfo => new LibraryAccountingInfo
                {
                    LibraryAccountingID = libraryAccountingsInfo.libraryAccountings.libraryAccountings.LibraryAccountingID,
                    Type = libraryAccountingsInfo.libraryAccountings.libraryAccountings.Type,
                    BookInfo = $"{ libraryAccountingsInfo.books.Author }| { libraryAccountingsInfo.books.Name }| {libraryAccountingsInfo.books.IssueDate}",
                    AccountInfo = $"{libraryAccountingsInfo.libraryAccountings.libraryAccounts.AccountNumber}|" +
                    $"{libraryAccountingsInfo.libraryAccountings.libraryAccounts.FirstName}|" +
                    $"{libraryAccountingsInfo.libraryAccountings.libraryAccounts.SurName}",
                    IssueDate = libraryAccountingsInfo.libraryAccountings.libraryAccountings.IssueDate,
                    CompletionDate = libraryAccountingsInfo.libraryAccountings.libraryAccountings.CompletionDate
                }).ToArray();

                return accountsInfo;
            }
        }

        public HttpStatusCode PostLibraryAccounting([FromBody]LibraryAccounting libraryAccounting)
        {
            using (var _context = LibraryContext.Create())
            {
                try
                {
                    _context.LibraryAccounting.Add(libraryAccounting);
                    _context.SaveChangesAsync();

                    return HttpStatusCode.Created;
                }
                catch (Exception)
                {
                    return HttpStatusCode.NoContent;
                }

            }
        }
        #endregion

        #region LibraryAccount
        public LibraryAccount[] GetLibraryAccounts()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.LibraryAccounts.ToArray();
            }
        }

        public AccountInfo[] GetAccountsInfo()
        {
            using (var _context = LibraryContext.Create())
            {
                var accountsInfo = _context.LibraryAccounts.Select(x => new AccountInfo
                {
                    AccountID = x.AccountID,
                    AccountData = $"{x.AccountNumber}|{x.FirstName}|{x.SurName}"
                }).ToArray();

                return accountsInfo;
            }
        }

        public HttpStatusCode PostLibraryAccount([FromBody]LibraryAccount libraryAccount)
        {
            using (var _context = LibraryContext.Create())
            {
                try
                {
                    _context.LibraryAccounts.Add(libraryAccount);
                    _context.SaveChangesAsync();

                    return HttpStatusCode.Created;
                }
                catch (Exception)
                {
                    return HttpStatusCode.NoContent;
                }
            }
        }
        #endregion

        #region PenaltiesAccounting
        public PenaltiesAccounting[] GetPenaltiesAccounting()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.PenaltiesAccountings.ToArray();
            }
        }

        public PenaltiesAccountingsInfo[] GetPenaltiesAccountingsInfo()
        {
            using (var _context = LibraryContext.Create())
            {
                var penaltiesAccountingsInfo = _context.PenaltiesAccountings
                .Join(
                    _context.LibraryAccounts,
                    penaltiesAccountings => penaltiesAccountings.AccountID,
                    libraryAccounts => libraryAccounts.AccountID,
                    (penaltiesAccountings, libraryAccounts) => new
                    {
                        penaltiesAccountings,
                        libraryAccounts
                    })
                .Join(
                    _context.Penalties,
                    penaltiesAccountings => penaltiesAccountings.penaltiesAccountings.PenaltyID,
                    penalties => penalties.PenaltyID,
                    (penaltiesAccountings, penalties) => new
                    {
                        penaltiesAccountings,
                        penalties
                    })
                .Select(penaltiesAccountingsInfo => new PenaltiesAccountingsInfo
                {
                    PenaltiesAccountingID = penaltiesAccountingsInfo.penaltiesAccountings.penaltiesAccountings.PenaltiesAccountingID,
                    AccountNumber = penaltiesAccountingsInfo.penaltiesAccountings.libraryAccounts.AccountNumber,
                    FirstName = penaltiesAccountingsInfo.penaltiesAccountings.libraryAccounts.FirstName,
                    SurName = penaltiesAccountingsInfo.penaltiesAccountings.libraryAccounts.SurName,
                    Type = penaltiesAccountingsInfo.penalties.Type,
                    Sum = penaltiesAccountingsInfo.penaltiesAccountings.penaltiesAccountings.Sum,
                    Date = penaltiesAccountingsInfo.penaltiesAccountings.penaltiesAccountings.Date
                }).ToArray();

                return penaltiesAccountingsInfo;
            }
        }

        public HttpStatusCode PostPenaltiesAccounting([FromBody]PenaltiesAccounting penaltiesAccounting)
        {
            using (var _context = LibraryContext.Create())
            {
                try
                {
                    _context.PenaltiesAccountings.Add(penaltiesAccounting);
                    _context.SaveChangesAsync();

                    return HttpStatusCode.Created;
                }
                catch (Exception)
                {

                    return HttpStatusCode.NoContent;
                }
            }
        }
        #endregion

        #region Penalty
        public Penalty[] GetPenalties()
        {
            using (var _context = LibraryContext.Create())
            {
                return _context.Penalties.ToArray();
            }
        }

        public HttpStatusCode PostPenalty([FromBody]Penalty penalty)
        {
            using (var _context = LibraryContext.Create())
            {
                try
                {
                    _context.Penalties.Add(penalty);
                    _context.SaveChangesAsync();

                    return HttpStatusCode.Created;
                }
                catch (Exception)
                {

                    return HttpStatusCode.NoContent;
                }
            }
        }
        #endregion
    }
}
