import { Penalty } from './../../models/penalty.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CreateLibraryAccountingComponent } from '../create-library-accounting/create-library-accounting.component';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { DatePipe } from '@angular/common';
import { PenaltiesAccounting } from 'src/app/models/penaltiesaccounting.model';
import { AccountInfo } from 'src/app/models/accountinfo.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-penalty-accounting',
  templateUrl: './create-penalty-accounting.component.html',
  styleUrls: ['./create-penalty-accounting.component.scss']
})
export class CreatePenaltyAccountingComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    Penalties: new FormControl('', Validators.required),
    Accounts: new FormControl('', Validators.required),
    Sum: new FormControl(0, Validators.required),
    Date: new FormControl(0, Validators.required)
  });

  public accountsInfo$: Observable<AccountInfo[]>;
  public penalties$: Observable<Penalty[]>;

  constructor(private dialogRef: MatDialogRef<CreateLibraryAccountingComponent>,
    private connectionProxyService: ConnectionProxyService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.accountsInfo$ = this.connectionProxyService.getAccountsInfo();
    this.penalties$ = this.connectionProxyService.getPenalties();
  }

  public onCreateButtonClick(): void {
    const penaltiesAccounting: PenaltiesAccounting = {
      PenaltyID: this.form.get('Penalties').value as number,
      AccountID: this.form.get('Accounts').value as number,
      Sum: this.form.get('Sum').value as number,
      // IssueDate: this.datepipe.transform(this.form.get('IssueDate').value as Date, 'yyyy-MM-dd'),
      Date: this.form.get('Date').value as Date
      // Проблемы с конвертацией даты в строку для XML-RPC
      // CompletionDate: this.datepipe.transform(this.form.get('CompletionDate').value as Date, 'yyyy-MM-dd')
    } as PenaltiesAccounting;
    this.connectionProxyService.postPenaltiesAccounting(penaltiesAccounting).pipe().subscribe((next: any) => {
    });
  }
}
