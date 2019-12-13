import { Penalty } from './../../models/penalty.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';

@Component({
  selector: 'app-create-penalty',
  templateUrl: './create-penalty.component.html',
  styleUrls: ['./create-penalty.component.scss']
})
export class CreatePenaltyComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    Type: new FormControl('', Validators.required),
    DateFrom: new FormControl(0, Validators.required)
  });
  constructor(private dialogRef: MatDialogRef<CreatePenaltyComponent>,
    private connectionProxyService: ConnectionProxyService) { }

  ngOnInit() {
  }
  public onCreateButtonClick(): void {
    const penalty: Penalty = {
      Type: this.form.get('Type').value,
      DateFrom: this.form.get('DateFrom').value as Date
    } as Penalty;
    this.connectionProxyService.postPenalty(penalty).pipe().subscribe((next: any) => {
    });
  }
}
