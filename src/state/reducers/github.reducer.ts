// github.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as GithubActions from '../actions';
import { GithubState } from '../state';



const initialState: GithubState = {
  users: [],
  loading: false,
  error: null,
};

export const githubReducer = createReducer(
  initialState,
  on(GithubActions.searchUsers, state => ({ ...state, loading: true })),
  on(GithubActions.searchUsersSuccess, (state, { users }) => ({ ...state, users, loading: false, error: null })),
  on(GithubActions.searchUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
