import { LibraryAccount } from './../../models/libraryaccount.model';
import { Component, OnInit } from '@angular/core';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { AccountInfo } from 'src/app/models/accountinfo.model';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss']
})
export class AccountsViewComponent implements OnInit {

  public accounts: Observable<LibraryAccount[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public form: FormGroup = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    SurName: new FormControl('', Validators.required),
    AccountNumber: new FormControl('', Validators.required),
    PasNumber: new FormControl(0, Validators.required),
    PasSerial: new FormControl(0, Validators.required)
  });

  constructor( private proxyService: ConnectionProxyService) { }

  ngOnInit() {
    this.accounts = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getLibraryAccounts();
      })
    );
  }

  public onCreateButtonClick() {
  }

}
