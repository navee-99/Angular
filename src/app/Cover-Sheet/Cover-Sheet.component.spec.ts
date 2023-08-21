import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverSheetComponent } from './Cover-Sheet.component';

describe('Test3FormComponent', () => {
  let component: CoverSheetComponent;
  let fixture: ComponentFixture<CoverSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
