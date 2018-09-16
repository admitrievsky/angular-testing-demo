import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResults } from '../models/github-responses';

export enum Order {
  descending = 'desc',
  ascending = 'asc'
}

@Injectable({
  providedIn: 'root'
})
export class GithubConnectorService {
  private API_URL = 'https://api.github.com/';
  private SEARCH_REPOSITORIES_URL = `${this.API_URL}search/repositories`;

  constructor(private http: HttpClient) { }

  searchRepositories(search: string, order: Order = Order.descending, page = 0): Observable<SearchResults> {
    const params = new HttpParams ()
      .set('q', search)
      .set('order', order)
      .set('page', page.toString());

    return this.http.get<SearchResults>(this.SEARCH_REPOSITORIES_URL, {
      params: params
    });
  }
}
