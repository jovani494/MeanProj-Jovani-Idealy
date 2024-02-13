import { Component, OnInit, NgZone } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
  
  employeForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private servicesService: ServicesService
  ) {
     this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      job: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    });
  }

  // Getter to access form controls
  get myForm() {
    return this.employeForm.controls;
  }

  onSubmit() {
    if (!this.employeForm.valid) {
      return false;
    } else {
      this.servicesService.createEmploye(this.employeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
