import { createAction, props } from '@ngrx/store';
import { GithubUser } from 'src/app/types';


export const searchUsers = createAction('[GitHub] Search Users', props<{ query: string }>());
export const searchUsersSuccess = createAction('[GitHub] Search Users Success', props<{ users: GithubUser[] }>());
export const searchUsersFailure = createAction('[GitHub] Search Users Failure', props<{ error: any }>());
