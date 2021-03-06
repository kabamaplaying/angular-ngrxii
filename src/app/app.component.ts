import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as PostActions from './post.action';
import { Post } from './post';
import { State } from './post.reducer';
import { PostService } from './post.service';
import * as PostSelector from './store/post.selector';
import { PostImplFacadeService } from './services/facade/post-facade';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post$: Observable<State>;
  postSubscription: Subscription;
  postList: Observable<Post[]>;
  postListW: Post[];
  postById$: Observable<Post>;
  Title: string = '';
  IsCompleted: boolean = false;
  postError: Error = null;

  constructor(private store: Store<{ posts: State }>,
    private postService: PostService,
    private facade: PostImplFacadeService
  ) {
    this.post$ = store.select(PostSelector.getPostState)
  }
  ngOnInit() {
    this.postService.gerPostFromStorage().subscribe();
    this.postList = this.post$
      .pipe(
        tap(console.log),
        map(post => {
          return post as Post[];
        })
      )


    this.postList = this.facade.getAllPost();
    this.postById$ = this.facade.getByUserId('1');

  }



}
