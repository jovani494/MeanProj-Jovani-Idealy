import { Component } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent {
  service: Service = {
    Nom: '',
    Description: '',
    Duree : 0,
    Prix : 0,
    Commission : 0,
  };
  submitted = false;

  constructor(private serviceService: ServiceService) {}

  saveService(): void {
    const data = {
      Nom: this.service.Nom,
      Description: this.service.Description,
      Duree: this.service.Duree,
      Prix: this.service.Prix,
      Commission: this.service.Commission
    };

    this.serviceService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newService(): void {
    this.submitted = false;
    this.service = {
      Nom: '',
      Description: '',
      Duree : 0,
      Prix : 0,
      Commission : 0,
    };
  }
}
