import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { GetCategoriesAction, GetCategoriesErrorAction, GetCategoriesSuccessAction, GET_CATEGORIES } from './categories.actions';
import { Categories } from 'src/app/services/categories-service/model/categories.model.ts';

@Injectable()
export class CategoriesEffects {

  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}

  @Effect()
  getCategories$: Observable<GetCategoriesSuccessAction | GetCategoriesErrorAction> = this.actions$
  .pipe(
    ofType<GetCategoriesAction>(GET_CATEGORIES),
    switchMap((action: GetCategoriesAction) => {
      return this.categoriesService.getCategories$().pipe(
        map((response: Categories) => {
          return new GetCategoriesSuccessAction(response);
        }),
        catchError(errorResponse => {
          return of(new GetCategoriesErrorAction());
      })
    );
  })
  );
}
