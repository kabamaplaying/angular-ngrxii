import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from './post.action.ts';
import { Post } from './post';
export interface State {
  data: Post[];
  selected: Post;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
} 