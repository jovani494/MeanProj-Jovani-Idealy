import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit{
  services?: Service[];

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
) {}

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

  deleteService(_id: string): void {
    this.serviceService.delete(_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/admin/service']);
      },
      error: (e) => console.error(e)
    });
  }
}
