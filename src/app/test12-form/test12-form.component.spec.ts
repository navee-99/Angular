import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test12FormComponent } from './test12-form.component';

describe('Test12FormComponent', () => {
  let component: Test12FormComponent;
  let fixture: ComponentFixture<Test12FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test12FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test12FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
