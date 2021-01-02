import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ResultsService} from '../../services/results-service/results.service';
import {Observable, of} from 'rxjs';
import {FETCH_RESULTS, FetchResultsErrorAction, FetchResultsSuccessAction} from './results.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class ResultsEffects {

  constructor(private actions$: Actions, private resultsService: ResultsService) {
  }

  @Effect()
  fetchResults$: Observable<FetchResultsSuccessAction | FetchResultsErrorAction> = this.actions$.pipe(
    ofType(FETCH_RESULTS),
    switchMap(() => {
      return this.resultsService.fetchResults().pipe(
        map((payload) => new FetchResultsSuccessAction(payload)),
        catchError(() => of(new FetchResultsErrorAction()))
      );
    })
  );
}
