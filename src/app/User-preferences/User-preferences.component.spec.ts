import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesComponent } from './User-preferences.component';

describe('Test7FormComponent', () => {
  let component: UserPreferencesComponent;
  let fixture: ComponentFixture<UserPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
