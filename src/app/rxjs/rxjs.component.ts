import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, AfterViewInit, OnDestroy {
  private s1? : Subscription;
  private s2? : Subscription;
  word: string = 'Empty';

  word$ : Observable<string> = new Observable<string>(
    (observer) => {
      observer.next("First");
      observer.next("Second");
      observer.next("Third");
      observer.complete();
    }
  );

  numbers : Observable<number> = of(1,2,3,4,5,6,7,8,9); // we can not modify this observable...

  constructor(){}
 

  ngOnInit(): void {
    this.s1 = this.word$.subscribe({
      next: (data) => this.word = data,
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });
  }


  ngAfterViewInit(): void {
    this.s2 = this.word$.subscribe({
      next: (data) => console.log(data) ,
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
    this.s2.unsubscribe();
  }




}
