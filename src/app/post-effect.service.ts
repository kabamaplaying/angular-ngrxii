import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostService } from './post.service';
import * as PostActions from './post.action';
import { Post } from './post';

@Injectable()
export class PostEffectService {

  constructor(private service: PostService, private action$: Actions) { }

  getPost$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.getAllPost),
      mergeMap(action =>
        this.service.getPost().pipe(
          map((posts: Post[]) => {
             return  PostActions.getAllPost()
          }),
          catchError((error: Error) => {
            return of(PostActions.getPostError(error));
          })
        )
      )
    )
  );
}