import {TestBed, waitForAsync} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {ActivatedRouteSnapshot} from '@angular/router';
import {ViewResultsResolver} from './ViewResultsResolver';
import {ResultsReducerModel} from '../state/results/model/results-reducer-model';
import {FetchResultsAction} from '../state/results/results.actions';

describe('ViewResultsResolver', () => {
  let component: ViewResultsResolver;
  let store: Store<ResultsReducerModel>;
  const initialState: ResultsReducerModel = {
    status: 'NEW',
    results: {
      awards: []
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
        ViewResultsResolver,
        provideMockStore({initialState})
      ]
    })
      .compileComponents().catch(e => console.log(e));
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    component = TestBed.inject(ViewResultsResolver);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('resolve()', () => {

    it('should dispatch fetch results action', () => {
      const dispatchSpy = spyOn(store, 'dispatch');

      component.resolve(new ActivatedRouteSnapshot(), activatedRouteSnapshotStub);

      expect(dispatchSpy).toHaveBeenCalledWith(new FetchResultsAction());
    });
  });
});


