import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/model/service.model';


@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit,OnDestroy {
  public services:Service[]= [];
  isloading = false;
  error: any;
  private servicesSub: Subscription = new Subscription();
  constructor(private _serviceService:ServiceService) { }

  ngOnInit(): void {
    this._serviceService.getServices()
    this.servicesSub = this._serviceService.getServiceUpdateListener()
      .subscribe((services: Service[]) => {
        this.services = services;
        console.log("posts is", this.services)
      }, e => {
        this.isloading = false;
        this.error = e
      });
  }

  ngOnDestroy() {
    this.servicesSub.unsubscribe();
  }

}
