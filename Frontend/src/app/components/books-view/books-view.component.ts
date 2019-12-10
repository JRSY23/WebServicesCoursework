import { Book } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {

  public books: Observable<Book[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private proxyService: ConnectionProxyService) { }

  ngOnInit() {
    this.books = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getBooks();
      })
    );
  }

  /* public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreateCompanyDialogComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  } */

}
