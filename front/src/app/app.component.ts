import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['app.component.css']
  
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  router: any;
  constructor(router: Router) { 
    
  }
  prendreRendezVous() { 
    this.router.navigateByUrl('/rendez-vous');
  }
  goToAdmin() {
    this.router.navigateByUrl('/admin');
  }
  goToUser() {
    this.router.navigateByUrl('/user');
  }
  


}

function prendreRendezVous() {
  throw new Error('Function not implemented.');
}
function goToAdmin() {
  throw new Error('Function not implemented.');
}

function goToUser() {
  throw new Error('Function not implemented.');
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

