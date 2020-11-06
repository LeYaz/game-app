import { TestBed } from '@angular/core/testing';

import { TypeJeuService } from './type-jeu.service';

describe('TypeJeuService', () => {
  let service: TypeJeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeJeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
