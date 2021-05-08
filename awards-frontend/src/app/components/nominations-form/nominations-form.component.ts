import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nominations-form',
  templateUrl: './nominations-form.component.html',
  styleUrls: ['./nominations-form.component.scss']
})
export class NominationsFormComponent implements OnInit, OnChanges {

  @Input() categories: string[];
  @Input() submitState: string;
  @Input() categoriesStatus: string;

  // TODO change type from any
  @Output() submitButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitNominationsFailed: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitNominationsSuccess: EventEmitter<void> = new EventEmitter<void>();

  nominations: Map<string, string> = new Map<string, string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.isSubmitStateError()) {
      this.submitNominationsFailed.emit();
    }
    if (this.isSubmitStateSuccess()) {
      this.submitNominationsSuccess.emit();
    }
  }

  submit(): void {
    this.submitButtonClick.emit(this.nominations);
  }

  isSubmitStateFetching(): boolean {
    return this.submitState === 'FETCHING';
  }

  isSubmitStateError(): boolean {
    return this.submitState === 'ERROR';
  }

  isSubmitStateSuccess(): boolean {
    return this.submitState === 'SUCCESS';
  }

  isCategoriesStatusFetching(): boolean {
    return this.categoriesStatus === 'FETCHING';
  }

  isCategoriesStatusSuccess(): boolean {
    return this.categoriesStatus === 'SUCCESS';
  }

  isCategoriesStatusError(): boolean {
    return this.categoriesStatus === 'ERROR';
  }

}
