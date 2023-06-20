import { TestBed } from '@angular/core/testing';

import { PaypalDataService } from './paypal-data.service';

describe('PaypalDataService', () => {
  let service: PaypalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
