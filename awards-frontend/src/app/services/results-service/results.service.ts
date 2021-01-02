import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Results} from './model/results';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  fetchResults(): Observable<Results> {
    return this.http.get<Results>(`/api/awards`);
  }
}
