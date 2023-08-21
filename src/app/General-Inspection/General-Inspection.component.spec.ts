import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInspectionComponent } from './General-Inspection.component';

describe('Test4FormComponent', () => {
  let component: GeneralInspectionComponent;
  let fixture: ComponentFixture<GeneralInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
