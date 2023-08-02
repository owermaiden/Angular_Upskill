import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];
  selectedMentor: string = 'Ower';
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelectMentor(mentor: string){
    this.selectedMentor = mentor;
    console.log(this.selectedMentor);
  }


}
