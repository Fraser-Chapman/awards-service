import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getFetchResultsState, getResults} from '../../state/results/results.selector';
import {Observable} from 'rxjs';
import {Results} from '../../services/results-service/model/results';

@Component({
  selector: 'app-view-results-container',
  templateUrl: './view-results-container.component.html',
  styleUrls: ['./view-results-container.component.scss']
})
export class ViewResultsContainerComponent implements OnInit {

  resultsStatus$: Observable<string>;
  results$: Observable<Results>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.resultsStatus$ = this.store.select(getFetchResultsState);
    this.results$ = this.store.select(getResults);
  }

}
