import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GithubState } from '../state';

// Create a feature selector to select the 'github' state slice
export const selectGithubState = createFeatureSelector<GithubState>('github');

// Selectors for specific parts of the 'github' state
export const selectGithubUsers = createSelector(
  selectGithubState,
  (state: GithubState) => state.users
);

export const selectGithubLoading = createSelector(
  selectGithubState,
  (state: GithubState) => state.loading
);

export const selectGithubError = createSelector(
  selectGithubState,
  (state: GithubState) => state.error
);
