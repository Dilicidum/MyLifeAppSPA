import { TestBed } from '@angular/core/testing';

import { TimersettingsService } from './timersettings.service';

describe('TimersettingsService', () => {
  let service: TimersettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimersettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
