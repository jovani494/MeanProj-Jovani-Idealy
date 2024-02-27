import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { EmployeModel } from 'src/app/models/employe.model';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent {
  employes: EmployeModel[] = [];

  constructor(private employeService: EmployeService){}

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.employeService.getAllEmployes().subscribe({
      next: (employes) => {
        this.employes = employes;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
