import { TestBed } from '@angular/core/testing';

import { ConnectionCompteService } from './connection-compte.service';

describe('ConnectionCompteService', () => {
  let service: ConnectionCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
