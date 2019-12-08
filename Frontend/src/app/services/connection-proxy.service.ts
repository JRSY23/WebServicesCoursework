import { Penalty } from './../models/penalty.model';
import { AccountInfo } from './../models/accountinfo.model';
import { PenaltiesAccounting } from './../models/penaltiesaccounting.model';
import { LibraryAccounting } from './../models/libraryaccounting.model';
import { Book } from './../models/book.model';
import { LibraryXmlRpcService } from './library-xml-rpc.service';
import { LibrarySoapService } from './library-soap.service';
import {Injectable} from '@angular/core';
import {LibraryRestService} from './library-rest.service';
import {ConnectionTypeEnum, ConnectionTypeService} from './connection-type.service';
import {Observable} from 'rxjs';
import { BooksInfo } from '../models/booksinfo.model';
import { LibraryAccountingInfo } from '../models/libraryaccountinginfo.model';
import { PenaltiesAccountingsInfo } from '../models/penaltiesaccountingsinfo.model';
import { LibraryAccount } from '../models/libraryaccount.model';

@Injectable()
export class ConnectionProxyService {
  constructor(
    private libraryRestService: LibraryRestService,
    private librarySoapService: LibrarySoapService,
    private libraryXmlRpcService: LibraryXmlRpcService,
    private currentConnectionService: ConnectionTypeService) {

  }

  public getBooks(): Observable<Book[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getBooks();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getBooks();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getBooks();
        break;
    }
  }

  public getBookInfo(): Observable<BooksInfo[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getBookInfo();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getBookInfo();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getBookInfo();
        break;
    }
  }

  public postBook(book: Book): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.postBook(book);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.postBook(book);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.postBook(book);
        break;
    }
  }
//
  public getLibraryAccounting(): Observable<LibraryAccounting[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getLibraryAccounting();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getLibraryAccounting();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getLibraryAccounting();
        break;
    }
  }

  public getLibraryAccountingInfo(): Observable<LibraryAccountingInfo[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getLibraryAccountingInfo();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getLibraryAccountingInfo();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getLibraryAccountingInfo();
        break;
    }
  }

  public postLibraryAccounting(libraryAccounting: LibraryAccounting): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.postLibraryAccounting(libraryAccounting);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.postLibraryAccounting(libraryAccounting);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.postLibraryAccounting(libraryAccounting);
        break;
    }
  }
  //
  public getPenaltiesAccounting(): Observable<PenaltiesAccounting[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getPenaltiesAccounting();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getPenaltiesAccounting();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getPenaltiesAccounting();
        break;
    }
  }

  public getPenaltiesAccountingsInfo(): Observable<PenaltiesAccountingsInfo[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getPenaltiesAccountingsInfo();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getPenaltiesAccountingsInfo();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getPenaltiesAccountingsInfo();
        break;
    }
  }

  public postPenaltiesAccounting(penaltiesAccounting: PenaltiesAccounting): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.postPenaltiesAccounting(penaltiesAccounting);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.postPenaltiesAccounting(penaltiesAccounting);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.postPenaltiesAccounting(penaltiesAccounting);
        break;
    }
  }
  //
  public getLibraryAccounts(): Observable<LibraryAccount[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getLibraryAccounts();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getLibraryAccounts();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getLibraryAccounts();
        break;
    }
  }

  public getAccountsInfo(): Observable<AccountInfo[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getAccountsInfo();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getAccountsInfo();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getAccountsInfo();
        break;
    }
  }

  public postLibraryAccount(libraryAccount: LibraryAccount): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.postLibraryAccount(libraryAccount);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.postLibraryAccount(libraryAccount);
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.postLibraryAccount(libraryAccount);
        break;
    }
  }
  //

  public getPenalties(): Observable<Penalty[]> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.getPenalties();
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.getPenalties();
        break;
      case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.getPenalties();
        break;
    }
  }

  public postPenalty(penalty: Penalty): Observable<any> {
    switch (this.currentConnectionService.getCurrentConnection()) {
      case ConnectionTypeEnum.REST:
        return this.libraryRestService.postPenalty(penalty);
        break;
      case ConnectionTypeEnum.SOAP:
        return this.librarySoapService.postPenalty(penalty);
        break;
     case ConnectionTypeEnum.XMLRPC:
        return this.libraryXmlRpcService.postPenalty(penalty);
        break;
    }
  }
}
