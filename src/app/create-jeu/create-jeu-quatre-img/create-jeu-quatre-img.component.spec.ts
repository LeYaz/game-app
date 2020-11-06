import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJeuQuatreImgComponent } from './create-jeu-quatre-img.component';

describe('CreateJeuQuatreImgComponent', () => {
  let component: CreateJeuQuatreImgComponent;
  let fixture: ComponentFixture<CreateJeuQuatreImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJeuQuatreImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJeuQuatreImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
