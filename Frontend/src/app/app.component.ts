import {Component, OnInit} from '@angular/core';
import {ConnectionTypeEnum, ConnectionTypeService} from './services/connection-type.service';
import {BehaviorSubject} from 'rxjs';
import {ConnectionProxyService} from './services/connection-proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'course-work-app';

  public currentConnection$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public connectionTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private currentConnectionService: ConnectionTypeService,
    private connectionProxyService: ConnectionProxyService) {
  }

  ngOnInit(): void {
    this.currentConnection$.next(this.currentConnectionService.getCurrentConnection().toString());
    this.connectionTypes$.next(Object.keys(ConnectionTypeEnum).map(k => ConnectionTypeEnum[k as any]));
  }

  public onMenuButtonClick(value: string): void {
    this.currentConnectionService.setCurrentConnection(value as ConnectionTypeEnum);
    this.currentConnection$.next(this.currentConnectionService.getCurrentConnection().toString());
  }
}
