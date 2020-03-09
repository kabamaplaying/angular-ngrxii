import { createAction, props } from '@ngrx/store';
import { Post } from './post';
export enum PostActionsType {
  all =   '[ALL] Post',
  allPostSuccess ='[ALL] Post Success',
  allWithError = '[ALL] Post error'
}


export const getAllPost = createAction(PostActionsType.all);
export const getAllPostSuccess = createAction(PostActionsType.allPostSuccess,
  props<{ payload: Post[] }>()
);
export const getPostError = createAction(PostActionsType.allWithError, props<Error>());
