import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient, } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import {Client} from '../../models/client.model';
import { environment } from 'src/environements/environements';

// const baseUrl = 'http://localhost:8080/client';
const baseUrl = environment.apiUrl+ "/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private ClientsSubject = new BehaviorSubject<Client[]>([]);
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { this.loadClients(); }

  private loadClients() {
    this.http.get<Client[]>(baseUrl)
    .subscribe(clients => {
      this.ClientsSubject.next(clients);
    });
  }

  getAll(): Observable<Client[]> {
    this.loadClients();
    return this.ClientsSubject;
  }

  get(id: any): Observable<Client> {
    return this.http.get<Client>(`${baseUrl}/detail/${id}`);
  }

}
