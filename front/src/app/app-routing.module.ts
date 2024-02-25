import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './admin/service/service-list/service-list.component';
import { ServiceDetailsComponent } from './admin/service/service-details/service-details.component';
import { ServiceCreateComponent } from './admin/service/service-create/service-create.component';
import { ServiceUpdateComponent } from './admin/service/service-update/service-update.component';

import { ClientListComponent } from './admin/client/client-list/client-list.component';

import { EtatListComponent } from './admin/etat/etat-list/etat-list.component';
import { EtatCreateComponent } from './admin/etat/etat-create/etat-create.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardEmployeComponent } from './board-employe/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'admin', component: BoardAdminComponent , children : [
            //route service
        {path:"service", component: ServiceListComponent},
        {path:"service/detail/:id", component: ServiceDetailsComponent},
        {path:"service/create", component: ServiceCreateComponent},
        {path:"service/update/:id", component: ServiceUpdateComponent},

        {path : "client", component: ClientListComponent},

              //route etat
        {path:"etat", component: EtatListComponent},
        {path:"etat/create", component: EtatCreateComponent},
        {path:"etat/update/:id", component: EtatCreateComponent},
  ]
},

  //auth
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardEmployeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
