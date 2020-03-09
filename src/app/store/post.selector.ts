import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducerState  from '../post.reducer';

export interface PostSelectorState {
  data: reducerState.PostState;
}

export const getPostStateList = createFeatureSelector<PostSelectorState>('posts');

export const getPostState = createSelector(
  getPostStateList, 
  (state: PostSelectorState) => state.post
)
