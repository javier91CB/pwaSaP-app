import { TestBed, inject } from '@angular/core/testing';

import { HistoricalDataService } from './historical-data.service';

describe('HistoricalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoricalDataService]
    });
  });

  it('should be created', inject([HistoricalDataService], (service: HistoricalDataService) => {
    expect(service).toBeTruthy();
  }));
});
