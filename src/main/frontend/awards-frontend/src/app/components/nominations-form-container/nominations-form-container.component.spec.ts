import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {NominationsFormContainerComponent} from './nominations-form-container.component';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {CategoriesReducerModel} from '../../state/categories/model/categories-reducer-model';

describe('NominationsFormContainerComponentComponent', () => {
  let component: NominationsFormContainerComponent;
  let fixture: ComponentFixture<NominationsFormContainerComponent>;
  let store: Store<CategoriesReducerModel>;
  const initialState = {
    categories: {
      categories: [],
      status: 'NEW'
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NominationsFormContainerComponent],
      providers: [
        provideMockStore({initialState})
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

});
