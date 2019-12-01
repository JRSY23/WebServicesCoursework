import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Book} from '../models/book.model';
import * as xmlrpc from 'xmlrpc';
import {Observable, Observer} from 'rxjs';
import {Client} from 'xmlrpc';

@Injectable()
export class UserXmlRpcService {

  private xmlRpcClient: Client;

  constructor() {
    this.xmlRpcClient = xmlrpc.createClient({host: '127.0.0.1', port: 5678, path: '/'});
  }

  public GetBooks(): Observable<Book[]> {
    return new Observable<Book[]>((observer: Observer<Book[]>) => {
      this.xmlRpcClient.methodCall('GetBooks', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }

  public getListUsers(): Observable<UserModel[]> {
    return new Observable<UserModel[]>((observer: Observer<UserModel[]>) => {
      this.xmlRpcClient.methodCall('getAll', [], (error, value) => {
        observer.next(value);
        observer.complete();
      });
    });
  }
}
