import { TestBed } from '@angular/core/testing';

import { JeuAlbumService } from './jeu-album.service';

describe('JeuAlbumService', () => {
  let service: JeuAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
