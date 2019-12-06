import { TestBed } from '@angular/core/testing';

import { ObservableServiceService } from './observable-service.service';

describe('ObservableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableServiceService = TestBed.get(ObservableServiceService);
    expect(service).toBeTruthy();
  });
});
