import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ServicelistComponent } from './admin/service/servicelist/servicelist.component';
import { ServicecreateComponent } from './admin/service/servicecreate/servicecreate.component';
import { ServicedetailsComponent } from './admin/service/servicedetails/servicedetails.component';
 
import { CreateEmployeComponent } from './admin/employes/create-employe/create-employe.component';
import { EmployesListComponent } from './admin/employes/employes-list/employes-list.component';
import { UpdateEmployeComponent } from './admin/employes/update-employe/update-employe.component';
import { UpdateServiceComponent } from './admin/service/update-service/update-service.component';
import { adminComponent } from './admin/admin.component';


export const routes: Routes = [
 
  { path: 'rendez-vous', component : RendezVousComponent},
  { path: 'admin', component : adminComponent},
  { path: 'admin/employes/create', component: CreateEmployeComponent }, // Route pour la création d'un employé
  { path: 'admin/employes', component: EmployesListComponent }, // Route pour la liste des employés
  { path: 'admin/employes/update/:id', component: UpdateEmployeComponent }, // Route pour la mise à jour d'un employé
  { path: 'admin/service/servicecreate', component: ServicecreateComponent }, // Route pour la création d'un service
  { path: 'admin/service/update/:id', component: UpdateServiceComponent }, // Route pour la mise à jour d'un service
  { path: 'admin/service', component : ServicelistComponent},
  { path: 'admin/service/create', component : ServicecreateComponent},
  { path: 'admin/service/:id', component : ServicedetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


