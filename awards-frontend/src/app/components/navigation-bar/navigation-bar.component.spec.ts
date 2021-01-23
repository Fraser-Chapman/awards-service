import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import createSpyObj = jasmine.createSpyObj;

describe('NavigationBarComponentComponent', () => {
  const routerSpy = createSpyObj('router', ['navigateByUrl']);
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Router, useValue: routerSpy}
      ],
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

  describe('redirect', () => {
    it('should call router.navigate with given param', () => {
      const expectedPath = 'expectedPath';

      component.redirect(expectedPath);

      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith(expectedPath);
    });
  });
});
