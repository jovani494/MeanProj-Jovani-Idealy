import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEmployeComponent } from './admin/employes/create-employe/create-employe.component';
import { EmployesListComponent } from './admin/employes/employes-list/employes-list.component';
import { UpdateEmployeComponent } from './admin/employes/update-employe/update-employe.component';
import { ServicecreateComponent } from './admin/service/servicecreate/servicecreate.component';
import { ServicelistComponent } from './admin/service/servicelist/servicelist.component';
import { UpdateServiceComponent } from './admin/service/update-service/update-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'admin/employes/create', component: CreateEmployeComponent }, // Route pour la création d'un employé
  { path: 'admin/employes', component: EmployesListComponent }, // Route pour la liste des employés
  { path: 'admin/employes/update/:id', component: UpdateEmployeComponent }, // Route pour la mise à jour d'un employé
  { path: 'admin/service/servicecreate', component: ServicecreateComponent }, // Route pour la création d'un service
  { path: 'admin/service', component: ServicelistComponent }, // Route pour la liste des services
  { path: 'admin/service/update/:id', component: UpdateServiceComponent }, // Route pour la mise à jour d'un service
  // Ajoutez d'autres routes au besoin
];
