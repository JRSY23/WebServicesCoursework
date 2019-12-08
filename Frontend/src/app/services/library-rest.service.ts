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
    return this.httpClient.get<Book[]>('http://localhost:5001/api/rest/books/Get');
  }

  public postBook(book: Book): Observable<any> {
    return this.httpClient.post('http://localhost:5001/api/rest/books/Post', book);
  }

  public getBookInfo(): Observable<BooksInfo[]> {
    return this.httpClient.get<BooksInfo[]>('http://localhost:5001/api/rest/books/GetBookInfo');
  }
//
  public getLibraryAccounting(): Observable<LibraryAccounting[]> {
    return this.httpClient.get<LibraryAccounting[]>('http://localhost:5001/api/rest/LibraryAccountings/Get');
  }

  public getLibraryAccountingInfo(): Observable<LibraryAccountingInfo[]> {
    return this.httpClient.get<LibraryAccountingInfo[]>('http://localhost:5001/api/rest/LibraryAccountings/GetLibraryAccountingInfo');
  }

  public postLibraryAccounting(libraryAccountings: LibraryAccounting): Observable<any> {
    return this.httpClient.post('http://localhost:5001/api/rest/LibraryAccountings/Post', libraryAccountings);
  }
//
  public getPenaltiesAccounting(): Observable<PenaltiesAccounting[]> {
    return this.httpClient.get<PenaltiesAccounting[]>('http://localhost:5001/api/rest/PenaltiesAccountings/Get');
  }

  public getPenaltiesAccountingsInfo(): Observable<PenaltiesAccountingsInfo[]> {
    return this.httpClient
    .get<PenaltiesAccountingsInfo[]>('http://localhost:5001/api/rest/PenaltiesAccountings/GetPenaltiesAccountingsInfo');
  }

  public postPenaltiesAccounting(penaltiesAccounting: PenaltiesAccounting): Observable<any> {
    return this.httpClient.post('http://localhost:5001/api/rest/PenaltiesAccountings/Post', penaltiesAccounting);
  }
//
  public getLibraryAccounts(): Observable<LibraryAccount[]> {
    return this.httpClient.get<LibraryAccount[]>('http://localhost:5001/api/rest/LibraryAccounts/Get');
  }

  public getAccountsInfo(): Observable<AccountInfo[]> {
    return this.httpClient.get<AccountInfo[]>('http://localhost:5001/api/rest/LibraryAccounts/GetAccountsInfo');
  }

  public postLibraryAccount(libraryAccount: LibraryAccount): Observable<any> {
    return this.httpClient.post('http://localhost:5001/api/rest/LibraryAccounts/Post', libraryAccount);
  }
//
  public getPenalties(): Observable<Penalty[]> {
    return this.httpClient.get<Penalty[]>('http://localhost:5001/api/rest/Penalties/Get');
  }

  public postPenalty(penalty: Penalty): Observable<any> {
    return this.httpClient.post('http://localhost:5001/api/rest/Penalties/Post', penalty);
  }
}
