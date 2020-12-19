import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Categories } from './model/categories.model.ts';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories$(): Observable<Categories> {
    return this.http.get<Categories>('/api/categories');
  }
}
