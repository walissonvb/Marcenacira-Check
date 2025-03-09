import { TestBed } from '@angular/core/testing';

import { RelatorService } from './relator.service';

describe('RelatorService', () => {
  let service: RelatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
