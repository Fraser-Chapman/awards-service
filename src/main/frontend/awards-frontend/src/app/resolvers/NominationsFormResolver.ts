import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetCategoriesAction} from '../state/categories/categories.actions';

@Injectable()
export class NominationsFormResolver implements Resolve<boolean> {

  constructor(private store: Store<any>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new GetCategoriesAction());
    return true;
  }
}
