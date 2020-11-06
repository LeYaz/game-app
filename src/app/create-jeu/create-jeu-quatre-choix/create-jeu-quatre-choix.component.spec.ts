import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJeuQuatreChoixComponent } from './create-jeu-quatre-choix.component';

describe('CreateJeuQuatreChoixComponent', () => {
  let component: CreateJeuQuatreChoixComponent;
  let fixture: ComponentFixture<CreateJeuQuatreChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJeuQuatreChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJeuQuatreChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
