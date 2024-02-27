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

}
