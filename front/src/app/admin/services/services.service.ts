import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>('url_de_votre_api_pour_la_creation_d_employes', employeeData);
  }
}
