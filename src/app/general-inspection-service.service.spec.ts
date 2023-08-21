import { TestBed } from '@angular/core/testing';

import { GeneralInspectionServiceService } from './general-inspection-service.service';

describe('GeneralInspectionServiceService', () => {
  let service: GeneralInspectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInspectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
