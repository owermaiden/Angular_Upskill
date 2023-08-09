import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit {
  selectedMentor: Mentor | undefined;

  constructor(private service: MentorService, private router: Router){}

  ngOnInit(): void {
    this.selectedMentor = this.service.selectedMentor;
    console.log("ng oninit called in detail component");
  }

  onLikeMentor(selectedMentor: any ){
    this.service.onLikeMentor(selectedMentor);
    // this.router.navigate(['listComm']);
  }
}
