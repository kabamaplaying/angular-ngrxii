import { ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as reducerState  from '../post.reducer';

export interface PostSelectorState {
  post: reducerState.PostState;
}

export const getPostStateList:MemoizedSelector<object, PostSelectorState> = createFeatureSelector<PostSelectorState>('posts');

export const getPostState = createSelector(
  getPostStateList, 
  (state: PostSelectorState) => state.post
);
/** carga un post por el identificador del usuario*/
export const getByUserId = (userId: string ) => createSelector(getPostStateList, 
 (state: PostSelectorState) => state[userId]
);
