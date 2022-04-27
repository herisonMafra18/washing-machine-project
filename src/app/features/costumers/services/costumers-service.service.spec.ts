import { TestBed } from '@angular/core/testing';

import { CostumersServiceService } from './costumers-service.service';

describe('CostumersServiceService', () => {
  let service: CostumersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
