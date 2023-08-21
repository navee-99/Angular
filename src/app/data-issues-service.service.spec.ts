import { TestBed } from '@angular/core/testing';

import { DataIssuesServiceService } from './data-issues-service.service';

describe('DataIssuesServiceService', () => {
  let service: DataIssuesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataIssuesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
