import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuAlbumComponent } from './jeu-album.component';

describe('JeuAlbumComponent', () => {
  let component: JeuAlbumComponent;
  let fixture: ComponentFixture<JeuAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
