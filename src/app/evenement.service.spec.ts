import { TestBed } from '@angular/core/testing';

import { ParamCreService } from './evenement.service';

describe('EvenementService', () => {
  let service: ParamCreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamCreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
