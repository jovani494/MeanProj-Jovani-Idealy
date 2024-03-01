import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) { }

  // Adapt this URL to your API endpoint
  private readonly baseUrl = 'http://localhost:3000/employes';

  getEmployes() {
    return this.http.get(this.baseUrl);
  }

  getEmploye(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmploye(employe: any) {
    return this.http.post(this.baseUrl, employe);
  }

  updateEmploye(id: number, employe: any) {
    return this.http.put(`${this.baseUrl}/${id}`, employe);
  }

  deleteEmploye(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
