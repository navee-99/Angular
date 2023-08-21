import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIssuesComponent } from './Data-Issues.component';

describe('Test14FormComponent', () => {
  let component: DataIssuesComponent;
  let fixture: ComponentFixture<DataIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
