import { AccountInfo } from './../models/accountinfo.model';
import { LibraryAccount } from './../models/libraryaccount.model';
import { LibraryAccounting } from './../models/libraryaccounting.model';
import { BooksInfo } from './../models/booksinfo.model';
import { Book } from './../models/book.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Client, NgxSoapService} from 'ngx-soap';
import { LibraryAccountingInfo } from '../models/libraryaccountinginfo.model';
import { PenaltiesAccounting } from '../models/penaltiesaccounting.model';
import { PenaltiesAccountingsInfo } from '../models/penaltiesaccountingsinfo.model';
import { Penalty } from '../models/penalty.model';

@Injectable()
export class LibrarySoapService {

  private soapClient: BehaviorSubject<Client> = new BehaviorSubject<Client>(null);

  constructor(private soap: NgxSoapService) {
    this.soap.createClient('https://localhost:5001/api/soap/Library.asmx', {disableCache: false})
      .then(client => {
        this.soapClient.next(client);
      });
  }

  public getBooks(): Observable<Book[]> {
    return (this.soapClient.getValue() as any).GetBooks('stub').pipe(
      map((result: any) => {
        return result.result.GetBooksResult.Book;
      })
    );
  }

  public getBookInfo(): Observable<BooksInfo[]> {
    return (this.soapClient.getValue() as any).GetBookInfo('stub').pipe(
      map((result: any) => {
        return result.result.GetBookInfoResult.BooksInfo.map((book: any) => {
          return {
            BookID: book.BookID,
            BookData: book.BookData
          } as BooksInfo;
        });
      })
    );
  }

  public postBook(book: Book): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    return (this.soapClient.getValue() as any).CreateTaste({book: book}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
//
  public getLibraryAccounting(): Observable<LibraryAccounting[]> {
    return (this.soapClient.getValue() as any).GetLibraryAccounting('stub').pipe(
      map((result: any) => {
        return result.result.GetLibraryAccountingResult.LibraryAccounting;
      })
    );
  }

  public getLibraryAccountingInfo(): Observable<LibraryAccountingInfo[]> {
    return (this.soapClient.getValue() as any).GetLibraryAccountingInfo('stub').pipe(
      map((result: any) => {
        return result.result.GetLibraryAccountingInfoResult.LibraryAccountingInfo.map((libraryAccountingInfo: any) => {
          return {
            LibraryAccountingID: libraryAccountingInfo.LibraryAccountingID,
            Type: libraryAccountingInfo.Type,
            BookInfo: libraryAccountingInfo.BooksInfo,
            AccountInfo: libraryAccountingInfo.AccountInfo,
            IssueDate: libraryAccountingInfo.IssueDate,
            CompletionDate: libraryAccountingInfo.CompletionDate
          } as LibraryAccountingInfo;
        });
      })
    );
  }

  public postLibraryAccounting(libraryAccounting: LibraryAccounting): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    return (this.soapClient.getValue() as any).CreateTaste({libraryAccounting: libraryAccounting}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
  //
  public getPenaltiesAccounting(): Observable<PenaltiesAccounting[]> {
    return (this.soapClient.getValue() as any).GetPenaltiesAccounting('stub').pipe(
      map((result: any) => {
        return result.result.GetPenaltiesAccountingResult.PenaltiesAccounting;
      })
    );
  }

  public getPenaltiesAccountingsInfo(): Observable<PenaltiesAccountingsInfo[]> {
    return (this.soapClient.getValue() as any).GetPenaltiesAccountingsInfo('stub').pipe(
      map((result: any) => {
        return result.result.GetPenaltiesAccountingsInfoResult.PenaltiesAccountingsInfo.map((penaltiesAccountingsInfo: any) => {
          return {
            PenaltiesAccountingID: penaltiesAccountingsInfo.PenaltiesAccountingID,
            AccountNumber: penaltiesAccountingsInfo.AccountNumber,
            FirstName: penaltiesAccountingsInfo.FirstName,
            SurName: penaltiesAccountingsInfo.SurName,
            Type: penaltiesAccountingsInfo.Type,
            Sum: penaltiesAccountingsInfo.Sum,
            Date: penaltiesAccountingsInfo.Date
          } as PenaltiesAccountingsInfo;
        });
      })
    );
  }

  public postPenaltiesAccounting(penaltiesAccounting: PenaltiesAccounting): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    return (this.soapClient.getValue() as any).CreateTaste({penaltiesAccounting: penaltiesAccounting}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
  //
  public getLibraryAccounts(): Observable<LibraryAccount[]> {
    return (this.soapClient.getValue() as any).GetLibraryAccounts('stub').pipe(
      map((result: any) => {
        return result.result.GetLibraryAccountsResult.LibraryAccount;
      })
    );
  }

  public getAccountsInfo(): Observable<AccountInfo[]> {
    return (this.soapClient.getValue() as any).GetLibraryAccountsInfo('stub').pipe(
      map((result: any) => {
        return result.result.GetLibraryAccountingInfo.LibraryAccountsInfo.map((libraryAccountsInfo: any) => {
          return {
            AccountID: libraryAccountsInfo.AccontID,
            AccountData: libraryAccountsInfo.AccountData,
          } as AccountInfo;
        });
      })
    );
  }

  public postLibraryAccount(libraryAccount: LibraryAccount): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    return (this.soapClient.getValue() as any).CreateTaste({libraryAccount: libraryAccount}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
  //
  public getPenalties(): Observable<Penalty[]> {
    return (this.soapClient.getValue() as any).GetPenalties('stub').pipe(
      map((result: any) => {
        return result.result.GetPenaltiesResult.Penalty;
      })
    );
  }

  public postPenalty(penalty: Penalty): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    return (this.soapClient.getValue() as any).CreateTaste({penalty: penalty}).pipe(
      map((result: any) => {
        return of('');
      })
    );
  }
}
