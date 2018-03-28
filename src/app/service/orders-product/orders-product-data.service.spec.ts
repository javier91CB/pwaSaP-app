import { TestBed, inject } from '@angular/core/testing';

import { OrdersProductDataService } from './orders-product-data.service';

describe('OrdersProductDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersProductDataService]
    });
  });

  it('should be created', inject([OrdersProductDataService], (service: OrdersProductDataService) => {
    expect(service).toBeTruthy();
  }));
});
