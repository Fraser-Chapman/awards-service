import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {FetchResultsAction} from '../state/results/results.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class ViewResultsResolver implements Resolve<boolean> {

  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new FetchResultsAction());

    return true;
  }

}
