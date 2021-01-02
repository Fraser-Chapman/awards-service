import {Component, Input, OnInit} from '@angular/core';
import {Results} from '../../services/results-service/model/results';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {

  @Input() resultsStatus: string;
  @Input() results: Results;

  constructor() { }

  ngOnInit(): void {
  }

  isStatusSuccess(): boolean {
    return this.resultsStatus === 'SUCCESS';
  }

  isStatusFetching(): boolean {
    return this.resultsStatus === 'FETCHING';
  }

  isStatusError(): boolean {
    return this.resultsStatus === 'ERROR';
  }

}
