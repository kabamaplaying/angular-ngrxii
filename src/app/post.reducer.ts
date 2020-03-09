import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from './post.action';
import { Post } from './post';
export interface PostState {
  post: Post[];
  selected: Post;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: PostState = {
  post: [],
  selected: null,
  action: null,
  done: false,
  error: null
}

const reducer = createReducer(
  initialState,
  on(PostActions.getAllPost, state => state),
  on(PostActions.getAllPostSuccess, (state: PostState, { payload }) => {
    return { ...state, post: payload, done: false };
  }),
)

export function PostReducer(
  state: PostState | undefined,
  action: Action
): PostState {
  return reducer(state, action);
}