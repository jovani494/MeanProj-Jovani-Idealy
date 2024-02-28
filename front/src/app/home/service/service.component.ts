import { Component } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/admin/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services?: Service[];
  message = '';
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.retrieveServices();
  }

  retrieveServices(): void {
    this.serviceService.getAll().subscribe({
      next: (service) => {
        this.services = service;
        console.log(service);
      },
      error: (e) => console.error(e)
    });
  }

  formatPrice(price: number | undefined): string {
    if (price === undefined) {
      return "N/A"; // ou tout autre valeur par défaut que vous souhaitez afficher
    }
    return price.toLocaleString('fr-FR');
  }

}
