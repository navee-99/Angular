import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDynamicComponent } from './Static-Dynamic.component';

describe('Test16FormComponent', () => {
  let component: StaticDynamicComponent;
  let fixture: ComponentFixture<StaticDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
