import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  currentCustomer : string = 'Maria';
  word : number = 1200;
  isActive : boolean = true;

  constructor(private router: Router){}


  onClick(event: any){
    this.isActive = !this.isActive;
    console.log(event);
  }

  onMouseOver(){
    alert("Dont do it please...");
  }

  onInputChange(event : any){
    console.log(event);
    this.currentCustomer = event.target.value;
  }
//----------------------------------
 inputString: string = 'This is input';
 
 onSubmit(value: string){
  this.inputString = value;
 }

 //------router----------
 goToDirectives(){
    this.router.navigate(['directives']);
 }
}
