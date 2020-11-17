import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJeuResumeCatComponent } from './create-jeu-resume-cat.component';

describe('CreateJeuResumeCatComponent', () => {
  let component: CreateJeuResumeCatComponent;
  let fixture: ComponentFixture<CreateJeuResumeCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJeuResumeCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJeuResumeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
