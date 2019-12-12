import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LibraryAccount } from 'src/app/models/libraryaccount.model';
import { MatDialogRef } from '@angular/material';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    SurName: new FormControl('', Validators.required),
    AccountNumber: new FormControl('', Validators.required),
    PasNumber: new FormControl(0, Validators.required),
    PasSerial: new FormControl(0, Validators.required)
  });


  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
              private connectionProxyService: ConnectionProxyService) { }

  ngOnInit() {
  }

  public onCreateButtonClick(): void {
    const account: LibraryAccount = {
      AccountNumber: this.form.get('AccountNumber').value,
      PassportNumber: this.form.get('PasNumber').value as number,
      PassportSerial: this.form.get('PasSerial').value as number,
      FirstName: this.form.get('FirstName').value,
      SurName: this.form.get('SurName').value
    } as LibraryAccount;
    this.connectionProxyService.postLibraryAccount(account).pipe().subscribe((next: any) => {
    });
  }

}
