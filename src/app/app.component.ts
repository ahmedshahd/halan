import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { searchUsers } from 'src/state/actions';
import { selectGithubError, selectGithubLoading, selectGithubUsers } from 'src/state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'halan-assignment';
  searchControl = new FormControl();

  users$ = this.store.pipe(select(selectGithubUsers));
  loading$ = this.store.pipe(select(selectGithubLoading));
  error$ = this.store.pipe(select(selectGithubError));

  constructor(private store: Store) {
  }
  search() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Wait for a 1000 ms pause in events
      distinctUntilChanged(),
      switchMap((query) => this.searchUsers(query))
    ).subscribe()
  }

  searchUsers(query: string): Observable<any> {
    this.store.dispatch(searchUsers({ query }));
    return of({});
  }

}
