import { GET_CATEGORIES, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from './categories.actions';
import { CategoriesReducerModel } from './model/categories-reducer-model';

const defaultState: CategoriesReducerModel = {
  categories: [],
  status: 'NEW'
};

export function categoriesReducer(state: CategoriesReducerModel = defaultState, action: any): CategoriesReducerModel {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, state, {
        status: 'FETCHING'
      });

    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        categories: action.payload.categories,
        status: 'SUCCESS'
      });

    case GET_CATEGORIES_ERROR:
      return Object.assign({}, state, {
        status: 'ERROR'
      });

    default:
      return state;
  }
}
