import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { searchUsers, searchUsersFailure, searchUsersSuccess } from '../actions';
import { GithubService } from 'src/app/github.service';

@Injectable()
export class GithubEffects {
  constructor(private actions$: Actions, private githubService: GithubService) { }

  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUsers),
      switchMap(action =>
        this.githubService.searchUsers(action.query).pipe(
          map(users => searchUsersSuccess({ users })),
          catchError(error => of(searchUsersFailure({ error })))
        )
      )
    )
  );
}
