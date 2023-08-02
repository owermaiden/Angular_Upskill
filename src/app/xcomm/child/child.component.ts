import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() selectedMentor: string = 'Ower';
 @Output() likeEvent = new EventEmitter<string>();

 onLikeMentor(likedMentor: string){
    this.likeEvent.emit(likedMentor);
 }
}
