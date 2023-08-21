import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalApprovalComponent } from './Additional-Approval.component';

describe('Test2FormComponent', () => {
  let component: AdditionalApprovalComponent;
  let fixture: ComponentFixture<AdditionalApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
