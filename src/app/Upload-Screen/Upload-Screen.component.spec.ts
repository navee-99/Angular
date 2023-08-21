import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadScreenComponent } from './Upload-Screen.component';

describe('Test13FormComponent', () => {
  let component: UploadScreenComponent;
  let fixture: ComponentFixture<UploadScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
