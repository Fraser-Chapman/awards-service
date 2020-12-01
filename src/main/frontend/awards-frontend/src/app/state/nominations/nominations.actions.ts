const namespace = '[nominations]';

export const SUBMIT_NOMINATIONS = `${namespace} SUBMIT_NOMINATIONS`;
export const SUBMIT_NOMINATIONS_SUCCESS = `${namespace} SUBMIT_NOMINATIONS_SUCCESS`;
export const SUBMIT_NOMINATIONS_ERROR = `${namespace} SUBMIT_NOMINATIONS_ERROR`;

export class SubmitNominationsAction {
  readonly type = SUBMIT_NOMINATIONS;

  constructor(public payload: Map<string, string>) {}
}

export class SubmitNominationsSuccessAction {
  readonly type = SUBMIT_NOMINATIONS_SUCCESS;

  constructor() {}
}

export class SubmitNominationsErrorAction {
  readonly type = SUBMIT_NOMINATIONS_ERROR;

  constructor() {}
}



