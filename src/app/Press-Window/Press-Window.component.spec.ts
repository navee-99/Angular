import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressWindowComponent } from './Press-Window.component';

describe('PressWindowComponent', () => {
  let component: PressWindowComponent;
  let fixture: ComponentFixture<PressWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
