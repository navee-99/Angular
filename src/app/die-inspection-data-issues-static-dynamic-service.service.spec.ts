import { TestBed } from '@angular/core/testing';

import { DieInspectionDataIssuesStaticDynamicServiceService } from './die-inspection-data-issues-static-dynamic-service.service';

describe('DieInspectionDataIssuesStaticDynamicServiceService', () => {
  let service: DieInspectionDataIssuesStaticDynamicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieInspectionDataIssuesStaticDynamicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
