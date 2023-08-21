import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test10FormComponent } from './test10-form.component';

describe('Test10FormComponent', () => {
  let component: Test10FormComponent;
  let fixture: ComponentFixture<Test10FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test10FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test10FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
