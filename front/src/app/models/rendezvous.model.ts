export class RendezvousModel {
    _id?: any;
  DateRdv?: string;
  Heure?: string;
  Client?: any; // L'ID du client (assurez-vous d'utiliser le bon type ici)
  Service?: string; // L'ID du service
  Employe?: string; // L'ID de l'employé
  Etat?: any; // L'ID de l'état
  created_at?: Date;
}
