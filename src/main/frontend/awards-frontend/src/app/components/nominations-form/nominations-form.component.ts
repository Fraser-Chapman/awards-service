import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nominations-form',
  templateUrl: './nominations-form.component.html',
  styleUrls: ['./nominations-form.component.scss']
})
export class NominationsFormComponent implements OnInit {

  @Input() categories: string[];
  @Input() submitState: string;
  @Output() submitButtonClick: EventEmitter<any> = new EventEmitter<any>();

  nominations: Map<string, string> = new Map<string, string>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.submitButtonClick.emit(this.nominations);
  }

  isSubmitStateFetching(): boolean {
    return this.submitState === 'FETCHING';
  }

}
