import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from 'src/app/model/service.model';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + "/service"

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private services: Service[] = [];
 
  private servicesUpdated = new Subject<Service[]>();
  public err = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) { }

  getServiceUpdateListener() {
    return this.servicesUpdated.asObservable();
  }

  addService(Nom: string, Description: string, imgpath: File, Duree: Number,Prix: Number, Commission: Number) {
    const serviceData = new FormData();
    serviceData.append("Nom", Nom);
    serviceData.append("Description", Description);
    serviceData.append("image", imgpath, Nom);
    serviceData.append("Duree", Duree.toString());
    serviceData.append("Prix", Prix.toString());
    serviceData.append("Commission", Commission.toString());
    this.http.post<{ message: string; service: Service }>(BACKEND_URL,serviceData)
      .subscribe(responseData => {
        this.err.next(null)
        this.router.navigate(["/"]);
      })
      // err => {
      //   this.err.next(err)
      // } 
  }

  getServices() {
    this.http.get<{ message: string; services: any }>(BACKEND_URL)
      .pipe(
        map(serviceData => {
          return serviceData.services.map((service: any) => {
            return {
              Nom: service.Nom,
              Description: service.Description,
              _id: service._id,
              imagePath: service.imagePath,
              Prix: service.Prix,
              Duree: service.Duree,
              Commission: service.Commission,
              CommissionEmploye: service.CommissionEmploye
            };
          });
        })
      )
      .subscribe(transformedServices => {
        this.err.next(null)

        this.services = transformedServices;
        this.servicesUpdated.next([...this.services]);
      },
        err => {
          this.err.next(err)
        });
  }

  getService(_id: string) {
    return this.http.get<{
      _id: string, Nom: string, Description: string, imgpath: File, 
      Duree: Number,Prix: Number, Commission: Number, CommissionEmploye: Number;
    }>(
      BACKEND_URL +"/detail/" + _id
    );
  }

  updateService(_id: string, Nom: string, Description: string, 
    Duree: Number, Prix: Number, Commission: Number, image: File | string) {
    let serviceData: Service | FormData;
    if (typeof image === "object") {
      serviceData = new FormData();
      serviceData.append("_id", _id);
      serviceData.append("Nom", Nom);
      serviceData.append("Description", Description);
      serviceData.append("image", image, Nom);
      serviceData.append("Duree", Duree.toString());
      serviceData.append("Prix", Prix.toString());
      serviceData.append("Commission", Commission.toString());
    } else {
      serviceData = {
        _id: _id,
        Nom: Nom,
        Description: Description,
        imagePath: image,
        Duree: Duree,
        Prix: Prix,
        Commission: Commission,
        // CommissionEmploye: 0
      };
    }
    this.http
      .put(BACKEND_URL + "/" +_id, serviceData)
      .subscribe(response => {
        this.err.next(null)
        this.router.navigate(["/admin/service"]);
      },
        err => {
          this.err.next(err)
        });
  }

  deleteService(serviceId: string) {
    this.http
      .delete(BACKEND_URL +"/delete/"+ serviceId)
      .subscribe((data) => {
        this.err.next(null)
        const updatedServices = this.services.filter(service => service._id !== serviceId);
        this.services = updatedServices;
        this.servicesUpdated.next([...this.services]);
        this.router.navigate(["/"]);
      },
        e => {
          this.err.next(e)
        });
  }
}
