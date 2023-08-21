import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalComponent } from './Approval.component';

describe('Test1FormComponent', () => {
  let component: ApprovalComponent;
  let fixture: ComponentFixture<ApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
