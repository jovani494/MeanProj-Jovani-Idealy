import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin.component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class adminComponent implements OnInit {
  myForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      controlName: ['', Validators.required]
    });
  }

}