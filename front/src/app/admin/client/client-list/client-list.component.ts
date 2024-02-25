import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients?: Client[]
  constructor (private clientService : ClientService){}

  ngOnInit(): void {
    this.retrieveServices();
  }

  retrieveServices(): void {
    this.clientService.getAll().subscribe({
      next: (client) => {
        this.clients = client;
        console.log(client);
      },
      error: (e) => console.error(e)
    });
  }
}
