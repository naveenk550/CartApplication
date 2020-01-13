import { TestBed } from '@angular/core/testing';

import { SortFilterService } from './sort-filter.service';

describe('SortFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortFilterService = TestBed.get(SortFilterService);
    expect(service).toBeTruthy();
  });
});
