import { AccountInfo } from 'src/app/models/accountinfo.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { LibraryAccounting } from 'src/app/models/libraryaccounting.model';
import { Observable } from 'rxjs';
import { BooksInfo } from 'src/app/models/booksinfo.model';
import { DatePipe } from '@angular/common';
import { ConnectionTypeEnum } from 'src/app/services/connection-type.service';

@Component({
  selector: 'app-create-library-accounting',
  templateUrl: './create-library-accounting.component.html',
  styleUrls: ['./create-library-accounting.component.scss']
})
export class CreateLibraryAccountingComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    Type: new FormControl('', Validators.required),
    Books: new FormControl('', Validators.required),
    Accounts: new FormControl('', Validators.required),
    IssueDate: new FormControl(0, Validators.required),
    CompletionDate: new FormControl(0, Validators.required)
  });

  public booksInfo$: Observable<BooksInfo[]>;
  public accountsInfo$: Observable<AccountInfo[]>;
  currentConnectionService: any;

  constructor(private dialogRef: MatDialogRef<CreateLibraryAccountingComponent>,
    private connectionProxyService: ConnectionProxyService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.booksInfo$ = this.connectionProxyService.getBookInfo();
    this.accountsInfo$ = this.connectionProxyService.getAccountsInfo();
  }

  public onCreateButtonClick(): void {
    const libraryAccounting: LibraryAccounting = {
      Type: this.form.get('Type').value,
      BookID: this.form.get('Books').value as number,
      AccountID: this.form.get('Accounts').value as number,
      IssueDate: (this.form.get('IssueDate').value as Date),
      // IssueDate: this.datepipe.transform(this.form.get('IssueDate').value as Date, 'yyyy-MM-dd'),
      CompletionDate: this.form.get('CompletionDate').value as Date
      // Проблемы с конвертацией даты в строку для XML-RPC
      // CompletionDate: this.datepipe.transform(this.form.get('CompletionDate').value as Date, 'yyyy-MM-dd')
    } as LibraryAccounting;
    this.connectionProxyService.postLibraryAccounting(libraryAccounting).pipe().subscribe((next: any) => {
    });
  }

}
