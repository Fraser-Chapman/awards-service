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

  describe('submit', () => {

    it('should emit submit button clicked event with nominations', () => {
      component.submitButtonClick = jasmine.createSpyObj('EventEmitter', ['emit']);

      component.submit();

      expect(component.submitButtonClick.emit).toHaveBeenCalledWith(component.nominations);

    });
  });
});
