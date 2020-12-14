import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCategories} from '../../state/categories/categories.selector';
import {Observable} from 'rxjs';
import {SubmitNominationsAction} from '../../state/nominations/nominations.actions';
import {getSubmitNominationsState} from '../../state/nominations/nominations.selector';

@Component({
  selector: 'app-nominations-form-container-component',
  templateUrl: './nominations-form-container.component.html',
  styleUrls: ['./nominations-form-container.component.scss']
})
export class NominationsFormContainerComponent implements OnInit {

  categories$: Observable<string[]>;
  submitState$: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.categories$ = this.store.select(getCategories);
    this.submitState$ = this.store.select(getSubmitNominationsState);
  }

  submit(nominations: Map<string, string>): void {
    this.store.dispatch(new SubmitNominationsAction(nominations));
  }

}
