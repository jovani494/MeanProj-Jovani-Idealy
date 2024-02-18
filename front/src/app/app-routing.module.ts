import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RendezVousComponent } from './home/rendez-vous/rendez-vous.component';

import { ServicelistComponent } from './admin/service/servicelist/servicelist.component';
import { ServicecreateComponent } from './admin/service/servicecreate/servicecreate.component';
import { ServicedetailsComponent } from './admin/service/servicedetails/servicedetails.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'rendez-vous', component : RendezVousComponent},
  {path: 'admin/service', component : ServicelistComponent},
  {path: 'admin/service/create', component : ServicecreateComponent},
  {path: 'admin/service/:id', component : ServicedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
