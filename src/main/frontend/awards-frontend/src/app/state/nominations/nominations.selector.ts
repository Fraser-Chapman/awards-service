import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {NominationsReducerModel} from './model/nominations-reducer-model';

export const nominationsReducerState: MemoizedSelector<object, NominationsReducerModel> = createFeatureSelector<NominationsReducerModel>('nominations');

export const getSubmitNominationsState = createSelector(nominationsReducerState, (state: NominationsReducerModel) => {
  return state.status;
});
