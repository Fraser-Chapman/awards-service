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
    const stubCategories: Categories = {
      categories: ['Future President', 'Most likely to go to prison']
    };

    return of(stubCategories);
  }
}
