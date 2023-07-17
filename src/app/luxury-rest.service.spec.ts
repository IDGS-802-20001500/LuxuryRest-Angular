import { TestBed } from '@angular/core/testing';

import { LuxuryRestService } from './luxury-rest.service';

describe('LuxuryRestService', () => {
  let service: LuxuryRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxuryRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
