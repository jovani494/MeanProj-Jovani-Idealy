import { Component, OnInit } from '@angular/core';
import { EmploiDuTempsModel } from 'src/app/models/emploi-du-temps.model';
import { EmploiDuTempsServiceService } from '../emploi-du-temps.service.service';
import { StorageService } from 'src/app/_services/storage.service';
@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.css']
})
export class EmploiDuTempsComponent implements OnInit {

  emploiDuTemps: EmploiDuTempsModel | undefined;
  employeId: string | undefined;

  constructor(private emploiDuTempsService: EmploiDuTempsServiceService, private storageService : StorageService) { }

  ngOnInit(): void {
    // Récupérer l'ID de l'employé depuis le service de stockage
    const user = this.storageService.getUser();
    if (user) {
      this.employeId = user.id;
      // Charger les détails de l'emploi du temps pour cet employé
      this.obtenirEmploiDuTemps();
    }
  }

  obtenirEmploiDuTemps(): void {
    if (this.employeId) {
      this.emploiDuTempsService.obtenirEmploiDuTemps(this.employeId)
        .subscribe(
          (data: EmploiDuTempsModel) => {
            this.emploiDuTemps = data;
          },
          error => {
            console.error('Erreur lors de la récupération de l\'emploi du temps:', error);
          }
        );
    }
  }

}
