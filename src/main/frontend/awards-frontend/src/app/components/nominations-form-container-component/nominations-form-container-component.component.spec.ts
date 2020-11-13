import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NominationsFormContainerComponentComponent } from './nominations-form-container-component.component';

describe('NominationsFormContainerComponentComponent', () => {
  let component: NominationsFormContainerComponentComponent;
  let fixture: ComponentFixture<NominationsFormContainerComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationsFormContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsFormContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
