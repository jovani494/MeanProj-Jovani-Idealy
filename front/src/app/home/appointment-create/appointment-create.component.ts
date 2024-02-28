import { Component, OnInit } from '@angular/core';
import { RendezvousService } from 'src/app/_services/rendezvous.service';
import { RendezvousModel } from 'src/app/models/rendezvous.model';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeModel } from 'src/app/models/employe.model';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  employes?: EmployeModel[]
  clientLog : any;
  serviceId?: any ;

  appointment: RendezvousModel = {
    DateRdv : "",
    Heure: "",
    Client: "",// L'ID du client (assurez-vous d'utiliser le bon type ici)
    Service: "", // L'ID du service
    Employe: "", // L'ID de l'employé
    Etat: "", // L'ID de l'état
  };
  submitted = false;

  constructor(
    private rendezvousService : RendezvousService,
    public fb: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute) {}

    saveService() : void {
      this.clientLog = this.storageService.getUser();
      const clientId = this.clientLog.id;

      this.route.params.subscribe(params => {
        this.serviceId = params['id']; // Récupération de l'ID du service depuis les paramètres de l'URL
      });

      const data = {
        DateRdv : this.appointment.DateRdv,
        Heure: this.appointment.Heure,
        Client: clientId,// L'ID du client (assurez-vous d'utiliser le bon type ici)
        Service: this.serviceId, // L'ID du service
        Employe: this.appointment.Employe, // L'ID de l'employé
        Etat: "65d10c1ef1e2899e2f75ccff"
      };
  
      this.rendezvousService.createAppointment(data).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/service']);
        },
        error: (e) => console.error(e)
      });
    }
  
    ngOnInit(): void {
      this.retrieveServices();
    }
  
    retrieveServices(): void {
      this.route.params.subscribe(params => {
        this.serviceId = params['id']; // Récupération de l'ID du service depuis les paramètres de l'URL
      });

      this.rendezvousService.getEmployes(this.serviceId).subscribe({
        next: (employe) => {
          this.employes = employe;
          console.log(employe);
        },
        error: (e) => console.error(e)
      });
    }

}