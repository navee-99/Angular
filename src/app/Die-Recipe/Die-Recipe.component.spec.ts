import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieRecipeComponent } from './Die-Recipe.component';

describe('Test9FormComponent', () => {
  let component: DieRecipeComponent;
  let fixture: ComponentFixture<DieRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
