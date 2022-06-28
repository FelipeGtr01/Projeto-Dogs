import { TestBed } from '@angular/core/testing';

import { DOGSService } from './dogs.service';

describe('DOGSService', () => {
  let service: DOGSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DOGSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
