import { TestBed } from '@angular/core/testing';

import { MensAccessoriesService } from './mens-accessories.service';

describe('MensAccessoriesService', () => {
  let service: MensAccessoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensAccessoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
