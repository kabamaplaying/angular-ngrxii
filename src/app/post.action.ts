import { createAction, props } from '@ngrx/store';
import { Post } from './post';
export const getAllPost = createAction('[ALL] Post');
export const getAllPostSuccess = createAction('[ALL] Post Success',
  props<{ payload: Post[] }>()
);
