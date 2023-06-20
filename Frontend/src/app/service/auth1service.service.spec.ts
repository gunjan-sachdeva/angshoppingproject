import { TestBed } from '@angular/core/testing';

import { Auth1serviceService } from './auth1service.service';

describe('Auth1serviceService', () => {
  let service: Auth1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
