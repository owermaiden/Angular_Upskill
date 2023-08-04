import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  private mentors: Mentor[] = [
    new Mentor('Ower', 10),
    new Mentor('Matt', 5),
    new Mentor('Sahin', 20)
  ];

  selectedMentor: Mentor = this.mentors[0];

  constructor() { }

  getAllMentors(): Mentor[]{
    return this.mentors.slice();
  }

  selectMentor(mentor: Mentor){
    this.selectedMentor = mentor;
  }

  onLikeMentor(selectedMentor: any){
    let index = this.mentors.findIndex(d => d.name === selectedMentor.name);
    this.mentors[index].likeCount++;
  }



  


}
