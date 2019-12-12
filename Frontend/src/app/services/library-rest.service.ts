import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Book } from '../models/book.model';
import { BooksInfo } from '../models/booksinfo.model';
import { LibraryAccounting } from '../models/libraryaccounting.model';
import { LibraryAccountingInfo } from '../models/libraryaccountinginfo.model';
import { LibraryAccount } from '../models/libraryaccount.model';
import { AccountInfo } from '../models/accountinfo.model';
import { PenaltiesAccounting } from '../models/penaltiesaccounting.model';
import { PenaltiesAccountingsInfo } from '../models/penaltiesaccountingsinfo.model';
import { Penalty } from '../models/penalty.model';

@Injectable()
export class LibraryRestService {

  constructor(private httpClient: HttpClient) {
  }

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('https://localhost:5001/api/rest/books');
  }

  public postBook(book: Book): Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/rest/books', book);
  }

  public getBookInfo(): Observable<BooksInfo[]> {
    return this.httpClient.get<BooksInfo[]>('https://localhost:5001/api/rest/books/GetBookInfo');
  }
//
  public getLibraryAccounting(): Observable<LibraryAccounting[]> {
    return this.httpClient.get<LibraryAccounting[]>('https://localhost:5001/api/rest/LibraryAccountings');
  }

  public getLibraryAccountingInfo(): Observable<LibraryAccountingInfo[]> {
    return this.httpClient.get<LibraryAccountingInfo[]>('https://localhost:5001/api/rest/LibraryAccountings/GetLibraryAccountingInfo');
  }

  public postLibraryAccounting(libraryAccountings: LibraryAccounting): Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/rest/LibraryAccountings', libraryAccountings);
  }
//
  public getPenaltiesAccounting(): Observable<PenaltiesAccounting[]> {
    return this.httpClient.get<PenaltiesAccounting[]>('https://localhost:5001/api/rest/PenaltiesAccountings');
  }

  public getPenaltiesAccountingsInfo(): Observable<PenaltiesAccountingsInfo[]> {
    return this.httpClient
    .get<PenaltiesAccountingsInfo[]>('https://localhost:5001/api/rest/PenaltiesAccountings/GetPenaltiesAccountingsInfo');
  }

  public postPenaltiesAccounting(penaltiesAccounting: PenaltiesAccounting): Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/rest/PenaltiesAccountings', penaltiesAccounting);
  }
//
  public getLibraryAccounts(): Observable<LibraryAccount[]> {
    return this.httpClient.get<LibraryAccount[]>('https://localhost:5001/api/rest/LibraryAccounts');
  }

  public getAccountsInfo(): Observable<AccountInfo[]> {
    return this.httpClient.get<AccountInfo[]>('https://localhost:5001/api/rest/LibraryAccounts/GetAccountsInfo');
  }

  public postLibraryAccount(libraryAccount: LibraryAccount): Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/rest/LibraryAccounts', libraryAccount);
  }
//
  public getPenalties(): Observable<Penalty[]> {
    return this.httpClient.get<Penalty[]>('https://localhost:5001/api/rest/Penalties');
  }

  public postPenalty(penalty: Penalty): Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/rest/Penalties', penalty);
  }
}
