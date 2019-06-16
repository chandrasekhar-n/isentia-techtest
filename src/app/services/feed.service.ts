import { Injectable } from '@angular/core';
//import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, map} from 'rxjs/operators';

@Injectable()
export class FeedService {
  private baseUrl = environment.base_url;
  constructor(private http: Http) { }

  // getFeed() {
  //   const req = new HttpRequest('GET', this.baseUrl + '/api/flickerFeed');
  //   return this.http.request(req);
  // }
  getFeed(terms: Observable<string>) {
    return terms.pipe(debounceTime(400)).pipe(distinctUntilChanged()).pipe(switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    return this.http.get(this.baseUrl + '/api/flickerFeed?tags=' + term).pipe(map(res => res.json()));
  }
}
