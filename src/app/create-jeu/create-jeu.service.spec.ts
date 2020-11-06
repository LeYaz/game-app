import { TestBed } from '@angular/core/testing';

import { CreateJeuService } from './create-jeu.service';

describe('CreateJeuService', () => {
  let service: CreateJeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
