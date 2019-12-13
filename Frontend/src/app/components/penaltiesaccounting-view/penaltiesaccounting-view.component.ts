import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PenaltiesAccountingsInfo } from 'src/app/models/penaltiesaccountingsinfo.model';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { switchMap } from 'rxjs/operators';
import { CreatePenaltyAccountingComponent } from '../create-penalty-accounting/create-penalty-accounting.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-penaltiesaccounting-view',
  templateUrl: './penaltiesaccounting-view.component.html',
  styleUrls: ['./penaltiesaccounting-view.component.scss']
})
export class PenaltiesaccountingViewComponent implements OnInit {

  public penaltiesAccountingsInfo: Observable<PenaltiesAccountingsInfo[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private proxyService: ConnectionProxyService, private dialog: MatDialog) { }

  ngOnInit() {
    this.penaltiesAccountingsInfo = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getPenaltiesAccountingsInfo();
      })
    );
  }

   public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreatePenaltyAccountingComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }

}
