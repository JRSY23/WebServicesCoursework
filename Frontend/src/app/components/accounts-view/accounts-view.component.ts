import { CreateAccountComponent } from '../create-account/create-account.component';
import { LibraryAccount } from './../../models/libraryaccount.model';
import { Component, OnInit } from '@angular/core';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { AccountInfo } from 'src/app/models/accountinfo.model';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss']
})
export class AccountsViewComponent implements OnInit {

  public accounts: Observable<LibraryAccount[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  connectionProxyService: any;

  constructor( private proxyService: ConnectionProxyService, private dialog: MatDialog) { }

  ngOnInit() {
    this.accounts = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getLibraryAccounts();
      })
    );
  }

  public onCreateButtonClick() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const dialogRef = this.dialog.open(CreateAccountComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }

}
