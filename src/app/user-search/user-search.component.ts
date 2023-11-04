import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { searchUsers } from 'src/state/actions';
import { selectGithubError, selectGithubLoading, selectGithubUsers } from 'src/state/selectors';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  searchControl = new FormControl();

  users$ = this.store.pipe(select(selectGithubUsers));
  loading$ = this.store.pipe(select(selectGithubLoading));
  error$ = this.store.pipe(select(selectGithubError));

  constructor(private store: Store) {
  }

  search() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.searchUsers(query))
    ).subscribe()
  }

  searchUsers(query: string): Observable<any> {
    this.store.dispatch(searchUsers({ query }));
    return of({});
  }
}
