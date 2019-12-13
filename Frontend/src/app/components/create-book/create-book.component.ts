import { Book } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Author: new FormControl('', Validators.required),
    IssueDate: new FormControl('', Validators.required),
    Cost: new FormControl(0, Validators.required)
  });
  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
    private connectionProxyService: ConnectionProxyService) { }

  ngOnInit() {
  }

  public onCreateButtonClick(): void {
    const book: Book = {
      Name: this.form.get('Name').value,
      Author: this.form.get('Author').value,
      IssueDate: this.form.get('IssueDate').value as Date,
      Cost: this.form.get('Cost').value
    } as Book;
    this.connectionProxyService.postBook(book).pipe().subscribe((next: any) => {
    });
  }

}
