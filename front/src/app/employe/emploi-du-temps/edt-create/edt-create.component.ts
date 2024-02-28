import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmploiDuTempsServiceService } from '../../emploi-du-temps.service.service';
import { EmploiDuTempsModel } from 'src/app/models/emploi-du-temps.model';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-edt-create',
  templateUrl: './edt-create.component.html',
  styleUrls: ['./edt-create.component.css']
})
export class EdtCreateComponent {
  employeId: string | undefined;
  edt: EmploiDuTempsModel = {
    matinDebut: "", // Horaires du matin (début et fin)
    matinFin: "",
    soirDebut:  "" , // Horaires du soir (début et fin)
    soirFin:  "" ,
  };

  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private emploiDuTempsService: EmploiDuTempsServiceService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'employé depuis le service de stockage
    
  }

  saveService(): void {
    const user = this.storageService.getUser();
    if (user) {
      this.employeId = user.id;
    }
    
    const data = {
      employe : this.employeId,
      matinDebut: this.edt.matinDebut, // Horaires du matin (début et fin)
      matinFin: this.edt.matinFin,
      soirDebut:  this.edt.soirDebut , // Horaires du soir (début et fin)
      soirFin:  this.edt.soirFin ,
    };

    this.emploiDuTempsService.creerEmploiDuTemps(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  

}
