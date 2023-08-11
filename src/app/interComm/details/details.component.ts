import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  selectedMentor: Mentor | undefined;
  sb?: Subscription;

  constructor(private service: MentorService, private router: Router){}

  ngOnInit(): void {
    // this.selectedMentor = this.service.selectedMentor;
    this.sb = this.service.selectedMentorWithDefault$.subscribe({
      next: (data) => this.selectedMentor = data,
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });
    console.log("ng oninit called in detail component");
  }

  onLikeMentor(selectedMentor: any ){
    this.service.onLikeMentor(selectedMentor);
    // this.router.navigate(['listComm']);
  }

  ngOnDestroy(): void {
    this.sb?.unsubscribe();
  }
}
