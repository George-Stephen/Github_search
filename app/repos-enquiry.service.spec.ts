import { TestBed } from '@angular/core/testing';

import { ReposEnquiryService } from './repos-enquiry.service';

describe('ReposEnquiryService', () => {
  let service: ReposEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
