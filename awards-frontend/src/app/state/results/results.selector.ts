import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {ResultsReducerModel} from './model/results-reducer-model';

export const resultsReducerState: MemoizedSelector<object, ResultsReducerModel> = createFeatureSelector<ResultsReducerModel>('results');

export const getFetchResultsState = createSelector(resultsReducerState, (state: ResultsReducerModel) => {
  return state.status;
});

export const getResults = createSelector(resultsReducerState, (state: ResultsReducerModel) => {
  return state.results;
});
