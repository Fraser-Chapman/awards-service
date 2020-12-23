import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultsContainerComponent } from './view-results-container.component';

describe('ViewResultsContainerComponent', () => {
  let component: ViewResultsContainerComponent;
  let fixture: ComponentFixture<ViewResultsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResultsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
