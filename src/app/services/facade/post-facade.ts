import { Injectable } from '@angular/core';
import { PostFacadeService } from './post-facade-service';
import { Post } from '../../post';
import { Observable } from 'rxjs';
import { map, tap, switchMap, mergeMap, concatMap } from 'rxjs/operators';
import { EntityState } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import * as reducerState from '../../post.reducer';
import * as postSelector from '../../store/post.selector';

@Injectable({ providedIn: "root" })
export class PostImplFacadeService implements PostFacadeService {


  subscribedAssets$: Observable<Post[]> = this.store.select(
    postSelector.getPostStateList
  ).pipe(map((postState) => { return postState.post as Post[];}));
  constructor(private store: Store<EntityState<reducerState.PostSelectorState>>) { }

  getByUserId(userId: string): Observable<Post> {
    return this.store.select(postSelector.getByUserId(userId));
  }
  getAllPost(): Observable<Post[]> {
    return this.subscribedAssets$;     
}
}