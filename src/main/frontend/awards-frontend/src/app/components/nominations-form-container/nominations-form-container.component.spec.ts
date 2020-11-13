import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NominationsFormContainerComponent } from './nominations-form-container.component';

describe('NominationsFormContainerComponentComponent', () => {
  let component: NominationsFormContainerComponent;
  let fixture: ComponentFixture<NominationsFormContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationsFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
