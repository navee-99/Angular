import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditinalApprovalComponent } from './additinal-approval.component';

describe('AdditinalApprovalComponent', () => {
  let component: AdditinalApprovalComponent;
  let fixture: ComponentFixture<AdditinalApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditinalApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditinalApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
