import { CreatePenaltyComponent } from '../create-penalty/create-penalty.component';
import { Penalty } from './../../models/penalty.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ConnectionProxyService } from 'src/app/services/connection-proxy.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-penalties-view',
  templateUrl: './penalties-view.component.html',
  styleUrls: ['./penalties-view.component.scss']
})
export class PenaltiesViewComponent implements OnInit {

  public penalties: Observable<Penalty[]> = of([]);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private proxyService: ConnectionProxyService, private dialog: MatDialog) { }

  ngOnInit() {
    this.penalties = this.refresh$.pipe(
      switchMap((stub: boolean) => {
        return this.proxyService.getPenalties();
      })
    );
  }

   public onCreateButtonClick() {
    const dialogRef = this.dialog.open(CreatePenaltyComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh$.next(true);
    });
  }
}
