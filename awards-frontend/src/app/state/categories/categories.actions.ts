import { Action } from '@ngrx/store';
import { Categories } from 'src/app/services/categories-service/model/categories.model.ts';

const namespace = '[categories]';

export const GET_CATEGORIES = `${namespace} GET_CATEGORIES`;
export const GET_CATEGORIES_SUCCESS = `${namespace} GET_CATEGORIES_SUCCESS`;
export const GET_CATEGORIES_ERROR = `${namespace} GET_CATEGORIES_ERROR`;

export class GetCategoriesAction implements Action {
  readonly type = GET_CATEGORIES;

  constructor() {}
}

export class GetCategoriesSuccessAction implements Action {
  readonly type = GET_CATEGORIES_SUCCESS;

  constructor(public payload: Categories) {}
}

export class GetCategoriesErrorAction implements Action {
  readonly type = GET_CATEGORIES_ERROR;

  constructor() {}
}
