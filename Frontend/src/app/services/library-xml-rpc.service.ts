import { Penalty } from './../models/penalty.model';
import { LibraryAccountingInfo } from './../models/libraryaccountinginfo.model';
import { BooksInfo } from './../models/booksinfo.model';
import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import * as xmlrpc from 'xmlrpc';
import {Observable, Observer, of} from 'rxjs';
import {Client} from 'xmlrpc';
import {map} from 'rxjs/operators';
import { Book } from '../models/book.model';
import { LibraryAccounting } from '../models/libraryaccounting.model';
import { PenaltiesAccounting } from '../models/penaltiesaccounting.model';
import { PenaltiesAccountingsInfo } from '../models/penaltiesaccountingsinfo.model';
import { LibraryAccount } from '../models/libraryaccount.model';
import { AccountInfo } from '../models/accountinfo.model';


@Injectable()
export class LibraryXmlRpcService {
  private xmlRpcClient: Client;

  constructor() {
    this.xmlRpcClient = xmlrpc.createClient({host: '127.0.0.1', port: 5678, path: '/'});
  }

  public getBooks(): Observable<Book[]> {
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      this.xmlRpcClient.methodCall('GetBooks', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public postBook(book: Book): Observable<any> {
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      this.xmlRpcClient.methodCall('Post', [book], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getBookInfo(): Observable<BooksInfo[]> {
    return new Observable<BooksInfo[]>((observer: Observer<BooksInfo[]>) => {
      this.xmlRpcClient.methodCall('GetBookInfo', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
  //
  public getLibraryAccounting(): Observable<LibraryAccounting[]> {
    return new Observable<LibraryAccounting[]>((observer: Observer<LibraryAccounting[]>) => {
      this.xmlRpcClient.methodCall('GetLibraryAccounting', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public postLibraryAccounting(libraryAccounting: LibraryAccounting): Observable<any> {
    return new Observable<LibraryAccounting[]>((observer: Observer<LibraryAccounting[]>) => {
      this.xmlRpcClient.methodCall('Post', [libraryAccounting], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getLibraryAccountingInfo(): Observable<LibraryAccountingInfo[]> {
    return new Observable<LibraryAccountingInfo[]>((observer: Observer<LibraryAccountingInfo[]>) => {
      this.xmlRpcClient.methodCall('GetLibraryAccountingInfo', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
  //
  public getPenaltiesAccounting(): Observable<PenaltiesAccounting[]> {
    return new Observable<PenaltiesAccounting[]>((observer: Observer<PenaltiesAccounting[]>) => {
      this.xmlRpcClient.methodCall('GetPenaltiesAccounting', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public postPenaltiesAccounting(penaltiesAccounting: PenaltiesAccounting): Observable<any> {
    return new Observable<PenaltiesAccounting[]>((observer: Observer<PenaltiesAccounting[]>) => {
      this.xmlRpcClient.methodCall('Post', [penaltiesAccounting], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getPenaltiesAccountingsInfo(): Observable<PenaltiesAccountingsInfo[]> {
    return new Observable<PenaltiesAccountingsInfo[]>((observer: Observer<PenaltiesAccountingsInfo[]>) => {
      this.xmlRpcClient.methodCall('GetPenaltiesAccountingsInfo', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
   //
   public getLibraryAccounts(): Observable<LibraryAccount[]> {
    return new Observable<LibraryAccount[]>((observer: Observer<LibraryAccount[]>) => {
      this.xmlRpcClient.methodCall('GetLibraryAccounts', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public postLibraryAccount(libraryAccount: LibraryAccount): Observable<any> {
    return new Observable<LibraryAccount[]>((observer: Observer<LibraryAccount[]>) => {
      this.xmlRpcClient.methodCall('Post', [libraryAccount], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getAccountsInfo(): Observable<AccountInfo[]> {
    return new Observable<AccountInfo[]>((observer: Observer<AccountInfo[]>) => {
      this.xmlRpcClient.methodCall('GetAccountsInfo', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  //
  public getPenalties(): Observable<Penalty[]> {
    return new Observable<Penalty[]>((observer: Observer<Penalty[]>) => {
      this.xmlRpcClient.methodCall('GetPenalties', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public postPenalty(penalty: Penalty): Observable<any> {
    return new Observable<Penalty[]>((observer: Observer<Penalty[]>) => {
      this.xmlRpcClient.methodCall('Post', [penalty], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

}
