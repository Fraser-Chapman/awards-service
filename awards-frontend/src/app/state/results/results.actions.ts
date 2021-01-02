const namespace = '[results]';

export const FETCH_RESULTS = `${namespace} FETCH_RESULTS`;
export const FETCH_RESULTS_SUCCESS = `${namespace} FETCH_RESULTS_SUCCESS`;
export const FETCH_RESULTS_ERROR = `${namespace} FETCH_RESULTS_ERROR`;

export class FetchResultsAction {
  readonly type = FETCH_RESULTS;

  constructor() {}
}

export class FetchResultsSuccessAction {
  readonly type = FETCH_RESULTS_SUCCESS;

  constructor(public payload) {}
}

export class FetchResultsErrorAction {
  readonly type = FETCH_RESULTS_ERROR;

  constructor() {}
}
