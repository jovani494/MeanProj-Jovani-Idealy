import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

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


