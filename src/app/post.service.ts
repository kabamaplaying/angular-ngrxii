import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Post } from './post';
import { PostState } from './post.reducer';
import * as PostActions from './post.action';
import { Observable, of } from 'rxjs';
import { map, concatMap, tap, catchError } from 'rxjs/operators';
@Injectable()
export class PostService {

  constructor(private http: HttpClient, private store: Store<{ posts: PostState }>) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(data => { return data as Post[]; })
    );
  }

  gerPostFromStorage() {
    return this.getPost().pipe(
      map((post: Post[]) => { return this.store.dispatch(PostActions.getAllPostSuccess({ payload: post })); }),
      catchError((error: Error) => {
        this.store.dispatch(PostActions.getPostError(error));
        return of(PostActions.getPostError(error)); 
      }
      )
    )
  }

}