import { Injectable } from '@angular/core';
import { Mentor } from './shared/mentor';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  private mentors: Mentor[] = [
    new Mentor('Ower', 10),
    new Mentor('Matt', 5),
    new Mentor('Sahin', 20)
  ];

  // selectedMentor: Mentor = this.mentors[0];
  selectedMentor$ : Subject<Mentor> = new Subject(); // we can add new values inside this subject.. This is a special type of ebservable...
  selectedMentorWithDefault$ : BehaviorSubject<Mentor> = new BehaviorSubject(this.mentors[0]);

  constructor(private http: HttpClient) { }

  getAllMentors(): Mentor[]{
    return this.mentors.slice();
  }

  selectMentor(mentor: Mentor){
    // this.selectedMentor = mentor;
    // this.selectedMentor$.next(mentor);
    this.selectedMentorWithDefault$.next(mentor);
  }

  onLikeMentor(selectedMentor: any){
    let index = this.mentors.findIndex(d => d.name === selectedMentor.name);
    this.mentors[index].likeCount++;
  }



  


}
