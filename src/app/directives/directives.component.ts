import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isAuthorized: boolean = false;
  developers: string[] = ['Oleksiy', 'Kadifa', 'Gulcin', 'Mohamed'];

  onClick(){
    this.isAuthorized = !this.isAuthorized; 
  }

}
