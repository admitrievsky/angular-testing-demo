import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  searchRepositories(search, order: Order = Order.descending): Observable<any> {
    const params = new HttpParams ()
      .set('q', search)
      .set('order', order);

    return this.http.get<any>(this.SEARCH_REPOSITORIES_URL, {
      params: params
    });
  }
}
