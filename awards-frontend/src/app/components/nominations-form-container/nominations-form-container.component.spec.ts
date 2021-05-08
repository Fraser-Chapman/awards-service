/* tslint:disable:no-string-literal */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {NominationsFormContainerComponent} from './nominations-form-container.component';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {CategoriesReducerModel} from '../../state/categories/model/categories-reducer-model';
import {SubmitNominationsAction} from '../../state/nominations/nominations.actions';
import {MatSnackBar} from '@angular/material/snack-bar';
import createSpyObj = jasmine.createSpyObj;

describe('NominationsFormContainerComponent', () => {
  const snackBarServiceSpy = createSpyObj(MatSnackBar, ['open']);

  let component: NominationsFormContainerComponent;
  let fixture: ComponentFixture<NominationsFormContainerComponent>;
  let store: Store<CategoriesReducerModel>;
  const initialState = {
    nominations: {
      status: 'NEW'
    },
    categories: {
      categories: [],
      status: 'NEW'
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NominationsFormContainerComponent],
      providers: [
        provideMockStore({initialState}),
        {provide: MatSnackBar, useValue: snackBarServiceSpy}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select get categories status', () => {
      let result: string;
      component.categoriesStatus$.subscribe(status => result = status);

      expect(result).toEqual('NEW');
    });
  });

  describe('submit', () => {
    it('should dispatch SubmitNominationsAction with nominations', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      const nominations = new Map<string, string>();
      nominations['category'] = 'value';

      component.submit(nominations);

      expect(dispatchSpy).toHaveBeenCalledWith(new SubmitNominationsAction(nominations));
    });
  });

  describe('submitFailed', () => {
    it('should call snack bar service to open snack bar', () => {
      component.submitFailed();

      expect(snackBarServiceSpy.open).toHaveBeenCalledWith('Failed to submit nominations', 'Okay', {duration: 10000});
    });
  });

  describe('submitSuccess', () => {
    it('should call snack bar service to open snack bar', () => {
      component.submitSuccess();

      expect(snackBarServiceSpy.open).toHaveBeenCalledWith('Nominations submitted', 'Okay', {duration: 10000});
    });
  });

});
