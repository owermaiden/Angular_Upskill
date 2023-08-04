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

  constructor() { }

  


}
