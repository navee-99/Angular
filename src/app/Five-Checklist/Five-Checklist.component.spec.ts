import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveChecklistComponent } from './Five-Checklist.component';

describe('Test17FormComponent', () => {
  let component: FiveChecklistComponent;
  let fixture: ComponentFixture<FiveChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
