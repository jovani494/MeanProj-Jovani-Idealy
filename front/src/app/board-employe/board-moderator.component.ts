import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeModel } from '../models/employe.model';
import { EmployeService } from '../admin/employe/employe.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardEmployeComponent implements OnInit {
  content?: string;
  employe: EmployeModel | undefined;
  employeLog : any;
  preview?: string;
  form: FormGroup;

  constructor(public fb: FormBuilder,
    private userService: UserService,
    private employeService : EmployeService,
    private storageService: StorageService) {
      this.form = this.fb.group({
        avatar: [null],
      });
     }

  ngOnInit(): void {

    this.gEmp();

    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }

  gEmp() : void{
    this.employeLog = this.storageService.getUser();
    const employeId = this.employeLog.id; // Mettez l'ID du client que vous souhaitez récupérer
    this.employeService.getEmploye(employeId)
      .subscribe(
        (employe: EmployeModel) => {
          this.employe = employe;
          console.log('Employe:', employe);
        },
        (error) => {
          console.error('Erreur lors de la récupération du client:', error);
        }
      );
  }

  formulaireVisible = false;

  afficherFormulaire(): void {
    this.formulaireVisible = true;
  }

  selectedFile: any | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveImage(_id: string): void {
    this.employeService.updateImgEmp(_id, this.selectedFile).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }

}
