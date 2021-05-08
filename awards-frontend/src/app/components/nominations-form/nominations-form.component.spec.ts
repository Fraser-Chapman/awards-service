import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsFormComponent } from './nominations-form.component';

describe('NominationsFormComponent', () => {
  let component: NominationsFormComponent;
  let fixture: ComponentFixture<NominationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    describe('submitNominationsFailed', () => {
      it('should emit submit failed event if submit status is ERROR', () => {
        component.submitNominationsFailed = jasmine.createSpyObj('EventEmitter', ['emit']);
        component.submitState = 'ERROR';

        component.ngOnChanges();

        expect(component.submitNominationsFailed.emit).toHaveBeenCalled();
      });

      it('should NOT emit submit failed event if submit status is NOT ERROR', () => {
        component.submitNominationsFailed = jasmine.createSpyObj('EventEmitter', ['emit']);
        component.submitState = 'SUCCESS';

        component.ngOnChanges();

        expect(component.submitNominationsFailed.emit).not.toHaveBeenCalled();
      });
    });

    describe('submitNominationsSuccess', () => {
      it('should emit submit success event if submit status is SUCCESS', () => {
        component.submitNominationsSuccess = jasmine.createSpyObj('EventEmitter', ['emit']);
        component.submitState = 'SUCCESS';

        component.ngOnChanges();

        expect(component.submitNominationsSuccess.emit).toHaveBeenCalled();
      });

      it('should NOT emit submit success event if submit status is NOT SUCCESS', () => {
        component.submitNominationsSuccess = jasmine.createSpyObj('EventEmitter', ['emit']);
        component.submitState = 'ERROR';

        component.ngOnChanges();

        expect(component.submitNominationsSuccess.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('submit', () => {
    it('should emit submit button clicked event with nominations', () => {
      component.submitButtonClick = jasmine.createSpyObj('EventEmitter', ['emit']);

      component.submit();

      expect(component.submitButtonClick.emit).toHaveBeenCalledWith(component.nominations);

    });
  });

  describe('isCategoriesStatusFetching', () => {
    it('should return true if categoriesStatus is FETCHING', () => {
      component.categoriesStatus = 'FETCHING';

      const result = component.isCategoriesStatusFetching();

      expect(result).toBeTrue();
    });

    it('should return false if categoriesStatus is NOT FETCHING', () => {
      component.categoriesStatus = 'SOMETHING';

      const result = component.isCategoriesStatusFetching();

      expect(result).toBeFalse();
    });
  });

  describe('isCategoriesStatusSuccess', () => {
    it('should return true if categoriesStatus is SUCCESS', () => {
      component.categoriesStatus = 'SUCCESS';

      const result = component.isCategoriesStatusSuccess();

      expect(result).toBeTrue();
    });

    it('should return false if categoriesStatus is NOT SUCCESS', () => {
      component.categoriesStatus = 'SOMETHING';

      const result = component.isCategoriesStatusSuccess();

      expect(result).toBeFalse();
    });
  });

  describe('isCategoriesStatusError', () => {
    it('should return true if categoriesStatus is ERROR', () => {
      component.categoriesStatus = 'ERROR';

      const result = component.isCategoriesStatusError();

      expect(result).toBeTrue();
    });

    it('should return false if categoriesStatus is NOT ERROR', () => {
      component.categoriesStatus = 'SUCCESS';

      const result = component.isCategoriesStatusError();

      expect(result).toBeFalse();
    });
  });
});
