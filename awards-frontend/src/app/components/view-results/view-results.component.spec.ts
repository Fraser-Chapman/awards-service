import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewResultsComponent} from './view-results.component';

describe('ViewResultsComponent', () => {
  let component: ViewResultsComponent;
  let fixture: ComponentFixture<ViewResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewResultsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isStatusSuccess', () => {

    it('should return true if status is equal to SUCCESS', () => {
      component.resultsStatus = 'SUCCESS';

      const result = component.isStatusSuccess();

      expect(result).toBeTrue();
    });

    it('should return false if status is NOT equal to SUCCESS', () => {
      component.resultsStatus = 'ERROR';

      const result = component.isStatusSuccess();

      expect(result).toBeFalse();
    });
  });

  describe('isStatusFetching', () => {

    it('should return true if status is equal to FETCHING', () => {
      component.resultsStatus = 'FETCHING';

      const result = component.isStatusFetching();

      expect(result).toBeTrue();
    });

    it('should return false if status is NOT equal to FETCHING', () => {
      component.resultsStatus = 'ERROR';

      const result = component.isStatusFetching();

      expect(result).toBeFalse();
    });
  });

  describe('isStatusError', () => {

    it('should return true if status is equal to ERROR', () => {
      component.resultsStatus = 'ERROR';

      const result = component.isStatusError();

      expect(result).toBeTrue();
    });

    it('should return false if status is NOT equal to ERROR', () => {
      component.resultsStatus = 'FETCHING';

      const result = component.isStatusError();

      expect(result).toBeFalse();
    });
  });
});
