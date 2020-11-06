import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeJeuComponent } from './type-jeu.component';

describe('TypeJeuComponent', () => {
  let component: TypeJeuComponent;
  let fixture: ComponentFixture<TypeJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
