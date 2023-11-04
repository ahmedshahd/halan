
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { GithubSearchResponse, GithubUser } from './types';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<GithubUser[]> {
    if (query.trim() === '') {
      // Return an empty observable to prevent the API request
      return of([]);
    }
    return this.http.get<GithubSearchResponse>(`${this.baseUrl}/search/users?q=${query}`).pipe(
      map(response => response.items),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      // Handle 404 Not Found error
      throw new Error('User not found');
    } else if (error.status === 403) {
      // Handle 403 Forbidden error
      throw new Error('Access to the GitHub API is forbidden');
    } else {
      // Handle other errors
      console.error('An error occurred:', error);
      throw new Error('An error occurred while fetching GitHub users');
    }
  }

}
