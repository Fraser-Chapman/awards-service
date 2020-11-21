import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetCategoriesAction} from '../../state/categories/categories.actions';
import {getCategories} from '../../state/categories/categories.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nominations-form-container-component',
  templateUrl: './nominations-form-container.component.html',
  styleUrls: ['./nominations-form-container.component.scss']
})
export class NominationsFormContainerComponent implements OnInit {

  categories: Observable<string[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.categories = this.store.select(getCategories);
  }

  public getCategories(): void {
    this.store.dispatch(new GetCategoriesAction());
  }

}
