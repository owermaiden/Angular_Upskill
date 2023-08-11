import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(
      map(data => data.filter(each => each.title.length < 20))
    );
  }


}
