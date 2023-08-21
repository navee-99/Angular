import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieInspectionDataIssuesStaticDynamicComponent } from './die-inspection-data-issues-static-dynamic.component';

describe('DieInspectionDataIssuesStaticDynamicComponent', () => {
  let component: DieInspectionDataIssuesStaticDynamicComponent;
  let fixture: ComponentFixture<DieInspectionDataIssuesStaticDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieInspectionDataIssuesStaticDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieInspectionDataIssuesStaticDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
