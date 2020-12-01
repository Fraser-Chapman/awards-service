import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {
  SUBMIT_NOMINATIONS,
  SubmitNominationsAction,
  SubmitNominationsErrorAction,
  SubmitNominationsSuccessAction
} from './nominations.actions';
import {NominationsService} from '../../services/nominations-service/nominations.service';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class NominationsEffects {

  constructor(private actions$: Actions, private nominationsService: NominationsService) {
  }

  @Effect()
  submitNominations$: Observable<SubmitNominationsSuccessAction | SubmitNominationsErrorAction> = this.actions$
    .pipe(
      ofType(SUBMIT_NOMINATIONS),
      switchMap((action: SubmitNominationsAction) => {
        return this.nominationsService.submitNotifications$(action.payload).pipe(
          map(() => new SubmitNominationsSuccessAction()),
          catchError((error) => {
            return of(new SubmitNominationsErrorAction());
          })
        );
      })
    );
}
