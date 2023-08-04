import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{
  mentors: Mentor[] = [];

  constructor(private service: MentorService, private router: Router){}

  ngOnInit(): void {
    this.mentors = this.service.getAllMentors();
  }

  onSelectMentor(mentor: Mentor){
    this.service.selectMentor(mentor);
    this.router.navigate(['intercomm']);
  }


}
