import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as PostActions from './post.action';
import Post from './post';
import { State } from './post.reducer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    constructor(private store: Store<{ posts: State }>) {
    this.post$ = store.pipe(select('posts'));
  }
  ngOnInit() {
    this.postSubscription = this.post$
      .pipe(
        map(post => {
          this.postList = post.data;
          this.todoError = post.error;
          console.log(this.postList)
        })
      )
      .subscribe();

    this.store.dispatch(PostActions.getAllPost());
  }

  post$: Observable<State>;
  postSubscription: Subscription;
  postList: Post[] = [];

  Title: string = '';
  IsCompleted: boolean = false;

  todoError: Error = null;
}
