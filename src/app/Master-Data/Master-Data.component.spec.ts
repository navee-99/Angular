import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataComponent } from './Master-Data.component';

describe('Test11FormComponent', () => {
  let component: MasterDataComponent;
  let fixture: ComponentFixture<MasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
