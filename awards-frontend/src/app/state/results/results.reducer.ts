import {ResultsReducerModel} from './model/results-reducer-model';
import {Action} from '@ngrx/store';
import {FETCH_RESULTS, FETCH_RESULTS_ERROR, FETCH_RESULTS_SUCCESS, FetchResultsSuccessAction} from './results.actions';

const defaultState: ResultsReducerModel = {
  status: 'NEW',
  results: {
    awards: []
  }
};

export function resultsReducer(state: ResultsReducerModel = defaultState, action: Action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return Object.assign({}, state, {
        status: 'FETCHING'
      });

    case FETCH_RESULTS_SUCCESS:
      const successAction = action as FetchResultsSuccessAction;
      return Object.assign({}, state, {
        status: 'SUCCESS',
        results: successAction.payload
      });

    case FETCH_RESULTS_ERROR:
      return Object.assign({}, state, {
        status: 'ERROR'
      });
  }
}
