import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieInspectionComponent } from './Die-Inspection.component';

describe('Test5FormComponent', () => {
  let component: DieInspectionComponent;
  let fixture: ComponentFixture<DieInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
