import {NominationsFormResolver} from './NominationsFormResolver';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {CategoriesReducerModel} from '../state/categories/model/categories-reducer-model';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {GetCategoriesAction} from '../state/categories/categories.actions';
import {ActivatedRouteSnapshot} from '@angular/router';

describe('NominationsFormResolver', () => {
  let component: NominationsFormResolver;
  let store: Store<CategoriesReducerModel>;
  const initialState = {
    categories: {
      categories: [],
      status: 'NEW'
    }
  };

  const activatedRouteSnapshotStub: any = {
    paramMap: {
      get: () => {
        return '';
      }
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        NominationsFormResolver,
        provideMockStore({initialState})
      ]
    })
      .compileComponents().catch(e => console.log(e));
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    component = TestBed.inject(NominationsFormResolver);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('resolve()', () => {

    it('should dispatch submit nominations action', () => {
      const dispatchSpy = spyOn(store, 'dispatch');

      component.resolve(new ActivatedRouteSnapshot(), activatedRouteSnapshotStub);

      expect(dispatchSpy).toHaveBeenCalledWith(new GetCategoriesAction());
    });
  });
});


