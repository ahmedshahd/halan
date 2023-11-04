
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'halan-assignment';
  searchControl = new FormControl();
  githubUsers$: Observable<any[]>;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.githubUsers$ = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term) => this.githubService.searchUsers(term)),
    );

  }


}
