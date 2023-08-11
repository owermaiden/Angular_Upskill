import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  private s1? : Subscription;
  private s2? : Subscription;
  private s3? : Subscription;
  word: string = 'Empty';

  posts: Post[] = [];

  word$ : Observable<string> = new Observable<string>(
    (observer) => {
      observer.next("Ower");
      observer.next("Matt");
      setTimeout(() => {
        observer.next('Sahin');
        observer.complete();
      }, 3000); 
    }
  );

  // numbers : Observable<number> = of(1,2,3,4,5,6,7,8,9); // we can not modify this observable...

  constructor(private postservice: PostService){}
 

  ngOnInit(): void {
    // this.s1 = this.word$.subscribe({
    //   next: (data) => this.word = data,
    //   error: (error) => console.log(error),
    //   complete: () => console.log('completed')
    // });

    this.s3 = this.postservice.getPost$().subscribe({
      next: (data) => this.posts = data,
      error: (error) => console.log(error),
      complete: () => console.log('completed')
    });

  }


  // ngAfterViewInit(): void {
  //   this.s2 = this.word$.subscribe({
  //     next: (data) => console.log(data) ,
  //     error: (error) => console.log(error),
  //     complete: () => console.log('completed')
  //   });
  // }

  ngOnDestroy(): void {
    this.s1?.unsubscribe();
    this.s2?.unsubscribe();
    this.s3?.unsubscribe();
  }




}
