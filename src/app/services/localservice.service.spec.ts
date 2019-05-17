import { TestBed } from '@angular/core/testing';

import { LocalserviceService } from './localservice.service';

describe('LocalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalserviceService = TestBed.get(LocalserviceService);
    expect(service).toBeTruthy();
  });
});
