import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from './post.action';
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

const reducer = createReducer(
  initialState,
  on(PostActions.getAllPost, state => state),
  on(PostActions.getAllPostSuccess, (state: State, {payload}) => {
    return {...state, data: payload, done: false};
  }),
)

export function PostReducer(
  state: State | undefined,
  action: Action
): State {
  return reducer(state, action);
}