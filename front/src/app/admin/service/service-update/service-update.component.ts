import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentService: Service = {
    Nom: '',
    Description: '',
    Duree : 0,
    Prix : 0,
    Commission : 0,
    
  };

  constructor(private serviceService: ServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getService(this.route.snapshot.params['id']);
    }
  }

  getService(id: string): void {
    this.serviceService.get(id).subscribe({
      next: (data) => {
        this.currentService = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateService(): void {
    this.serviceService
      .update(this.currentService._id, this.currentService)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

}
