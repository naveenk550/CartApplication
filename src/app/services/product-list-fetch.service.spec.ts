import { TestBed } from '@angular/core/testing';

import { ProductListFetchService } from './product-list-fetch.service';

describe('ProductListFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListFetchService = TestBed.get(ProductListFetchService);
    expect(service).toBeTruthy();
  });
});
