import {NominationsReducerModel} from './model/nominations-reducer-model';
import {SUBMIT_NOMINATIONS, SUBMIT_NOMINATIONS_ERROR, SUBMIT_NOMINATIONS_SUCCESS} from './nominations.actions';
import {Action} from '@ngrx/store';

const defaultState: NominationsReducerModel = {
  status: 'NEW'
};

export function nominationsReducer(state: NominationsReducerModel = defaultState, action: Action) {
  switch (action.type) {
    case SUBMIT_NOMINATIONS:
      return Object.assign({}, state, {
        status: 'FETCHING'
      });
    case SUBMIT_NOMINATIONS_SUCCESS:
      return Object.assign({}, state, {
        status: 'SUCCESS'
      });

    case SUBMIT_NOMINATIONS_ERROR:
      return Object.assign({}, state, {
        status: 'ERROR'
      });

    default:
      return state;
  }
}
