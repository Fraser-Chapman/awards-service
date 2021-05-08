import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCategories, getCategoriesStatus} from '../../state/categories/categories.selector';
import {Observable} from 'rxjs';
import {SubmitNominationsAction} from '../../state/nominations/nominations.actions';
import {getSubmitNominationsState} from '../../state/nominations/nominations.selector';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-nominations-form-container-component',
  templateUrl: './nominations-form-container.component.html',
  styleUrls: ['./nominations-form-container.component.scss']
})
export class NominationsFormContainerComponent implements OnInit {

  private readonly TEN_SECONDS = 10000;

  categories$: Observable<string[]>;
  categoriesStatus$: Observable<string>;
  submitState$: Observable<string>;

  constructor(private store: Store<any>, private snackBarService: MatSnackBar) { }

  ngOnInit() {
    this.categories$ = this.store.select(getCategories);
    this.categoriesStatus$ = this.store.select(getCategoriesStatus);
    this.submitState$ = this.store.select(getSubmitNominationsState);
  }

  submit(nominations: Map<string, string>): void {
    this.store.dispatch(new SubmitNominationsAction(nominations));
  }

  submitFailed(): void {
    this.snackBarService.open('Failed to submit nominations',  'Okay', {duration: this.TEN_SECONDS});
  }

  submitSuccess(): void {
    this.snackBarService.open('Nominations submitted', 'Okay', {duration: this.TEN_SECONDS});
  }

}
