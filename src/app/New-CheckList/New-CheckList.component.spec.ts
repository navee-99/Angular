import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckList } from './New-CheckList.component';

describe('FileUploadComponent', () => {
  let component: NewCheckList;
  let fixture: ComponentFixture<NewCheckList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCheckList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCheckList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
