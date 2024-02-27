import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/admin/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() currentService: Service = {
    Nom: '',
    Description: '',
    Duree : 0,
    Prix : 0,
    Commission : 0,
    
  };

  constructor(private serviceService : ServiceService, private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
      this.getService(this.route.snapshot.params['id']);
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

}
