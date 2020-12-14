import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('NavigationBarComponentComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ NavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
