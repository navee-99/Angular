import { TestBed } from '@angular/core/testing';

import { IBuyOffserviceService } from './additionalApprovalservice.service';

describe('IBuyOffserviceService', () => {
  let service: IBuyOffserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IBuyOffserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
