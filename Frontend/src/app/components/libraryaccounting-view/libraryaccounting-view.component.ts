import { LibraryAccountingInfo } from './../../models/libraryaccountinginfo.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-libraryaccounting-view',
  templateUrl: './libraryaccounting-view.component.html',
  styleUrls: ['./libraryaccounting-view.component.scss']
})
export class LibraryaccountingViewComponent implements OnInit {

  public libraryAccountingsInfo: Observable<LibraryAccountingInfo[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private proxyService: ConnectionProxyService) { }

  ngOnInit() {
    this.libraryAccountingsInfo = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getLibraryAccountingInfo();
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
