import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Service } from 'src/app/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUri:string="http://localhost:3000/service";
  private headers =  new HttpHeaders().set('Content-type','application/json');

  constructor(private http:HttpClient) { }

  createService(service:Service){
    return this.http.post(this.baseUri,service,{headers:this.headers})
  }

  listServices(){
    return this.http.get(this.baseUri,{headers:this.headers})
  }

  getService(_id:string){
    return this.http.get(this.baseUri+'/'+_id,{headers:this.headers})
  }

  updateService(service:Service,_id:string){
    return this.http.patch(this.baseUri+'/update/'+_id,service,{headers:this.headers})
  }

  deleteService(_id:string){
    return this.http.post(this.baseUri+'/delete/'+_id,{headers:this.headers})
  }
}
