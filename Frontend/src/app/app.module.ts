import { LibraryXmlRpcService } from './services/library-xml-rpc.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxSoapModule} from 'ngx-soap';
import {
  MatButtonModule,
  MatError,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule, MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {ConnectionProxyService} from './services/connection-proxy.service';
import {ConnectionTypeService} from './services/connection-type.service';
import { LibraryRestService } from './services/library-rest.service';
import { LibrarySoapService } from './services/library-soap.service';
import { BooksViewComponent } from './components/books-view/books-view.component';
import { LibraryaccountingViewComponent } from './components/libraryaccounting-view/libraryaccounting-view.component';
import { AccountsViewComponent } from './components/accounts-view/accounts-view.component';
import { PenaltiesViewComponent } from './components/penalties-view/penalties-view.component';
import { PenaltiesaccountingViewComponent } from './components/penaltiesaccounting-view/penaltiesaccounting-view.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: 'books', component: BooksViewComponent},
  {path: 'libraryaccounting', component: LibraryaccountingViewComponent},
  {path: 'accounts', component: AccountsViewComponent},
  {path: 'penaltiesaccounting', component: PenaltiesaccountingViewComponent},
  {path: 'penalties', component: PenaltiesViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksViewComponent,
    LibraryaccountingViewComponent,
    AccountsViewComponent,
    PenaltiesaccountingViewComponent,
    PenaltiesViewComponent,
    CreateAccountComponent
  ],
  entryComponents: [
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSoapModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ConnectionProxyService, LibraryXmlRpcService, LibraryRestService, LibrarySoapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
