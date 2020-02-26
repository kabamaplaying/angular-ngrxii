import { createAction, props } from '@ngrx/store';
import { Post } from './post';
export const getAllPost = createAction('[ALL] Post');
export const GET_ALL_POST_SUCCES = createAction('[ALL] Post Success',
  props<{ payload: Post[] }>()
);
export const GET_ALL_POST = createAction('[ALL] Post Error ',
  props<{ payload: Error }>());