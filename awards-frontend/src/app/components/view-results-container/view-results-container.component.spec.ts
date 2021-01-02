import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultsContainerComponent } from './view-results-container.component';
import {provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';

describe('ViewResultsContainerComponent', () => {
  let component: ViewResultsContainerComponent;
  let fixture: ComponentFixture<ViewResultsContainerComponent>;
  let store: Store<any>;

  const initialState = {
    results: {
      status: 'NEW',
      results: {
        awards: [
          {
            categoryName: 'CategoryOne',
            winnerName: 'PlayerOne',
            nominations: ['PlayerOne', 'PlayerTwo']
          }
        ]
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewResultsContainerComponent
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should select results status', (done) => {
      component.resultsStatus$.subscribe((status) => {
          expect(status).toEqual(initialState.results.status);
          done();
      });
    });

    it('should select results', (done) => {
      component.results$.subscribe(results => {
        expect(results).toEqual(initialState.results.results);
        done();
      });
    });
  });
});
