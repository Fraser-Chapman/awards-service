import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { CategoriesReducerModel } from './model/categories-reducer-model';

export const categoriesReducerState: MemoizedSelector<object, CategoriesReducerModel> = createFeatureSelector<CategoriesReducerModel>('categories');

export const getCategories = createSelector(categoriesReducerState, (state: CategoriesReducerModel) => {
  return state.categories;
});

export const getCategoriesStatus = createSelector(categoriesReducerState, (state: CategoriesReducerModel) => {
  return state.status;
});
