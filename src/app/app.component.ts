import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as PostActions from './post.action';
import { Post } from './post';
import { State } from './post.reducer';
import { PostService } from './post.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  constructor(private store: Store<{ posts: State }>, private postService: PostService) {
    this.post$ = store.pipe(select('posts'));
  }
  ngOnInit() {
   this.postService.gerPostFromStorage().subscribe(console.log);


    this.postSubscription = this.post$
      .pipe(
        tap(console.log),
        map(post => {
          this.postList = post.data;
          this.postError = post.error;
        })
      )
      .subscribe(e => console.log(`${e} - Que pasa`));

    const t = this.store.dispatch(PostActions.getAllPost());

  }

  post$: Observable<State>;
  postSubscription: Subscription;
  postList: Post[] = []; 

  Title: string = '';
  IsCompleted: boolean = false;

  postError: Error = null;
}
