import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myFrom!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.myFrom = this.fb.group({
      name: ['', [Validators.required, Validators.minLength] ],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit(){
    console.log(this.myFrom);
    this.myFrom.reset();
  }




}
