import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form: any){
    console.log(form.value);
  }


}
