import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './admin/service/service-list/service-list.component';
import { ServiceCreateComponent } from './admin/service/service-create/service-create.component';
import { ServiceDetailsComponent } from './admin/service/service-details/service-details.component';
import { EtatListComponent } from './admin/etat/etat-list/etat-list.component';
import { EtatCreateComponent } from './admin/etat/etat-create/etat-create.component';
import { EtatDetailsComponent } from './admin/etat/etat-details/etat-details.component';
import { ServiceUpdateComponent } from './admin/service/service-update/service-update.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceDetailsComponent,
    EtatListComponent,
    EtatCreateComponent,
    EtatDetailsComponent,
    ServiceUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
