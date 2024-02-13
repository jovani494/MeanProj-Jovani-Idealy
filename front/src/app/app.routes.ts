import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEmployeComponent } from './admin/employes/create-employe/create-employe.component';
import { EmployesListComponent } from './admin/employes/employes-list/employes-list.component';
import { UpdateEmployeComponent } from './admin/employes/update-employe/update-employe.component';
import { CreateServiceComponent } from './admin/services/create-service/create-service.component';
import { ServicesListComponent } from './admin/services/services-list/services-list.component';
import { UpdateServiceComponent } from './admin/services/update-service/update-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'admin/employes/create', component: CreateEmployeComponent }, // Route pour la création d'un employé
  { path: 'admin/employes', component: EmployesListComponent }, // Route pour la liste des employés
  { path: 'admin/employes/update/:id', component: UpdateEmployeComponent }, // Route pour la mise à jour d'un employé
  { path: 'admin/services/create', component: CreateServiceComponent }, // Route pour la création d'un service
  { path: 'admin/services', component: ServicesListComponent }, // Route pour la liste des services
  { path: 'admin/services/update/:id', component: UpdateServiceComponent }, // Route pour la mise à jour d'un service
  // Ajoutez d'autres routes au besoin
];
