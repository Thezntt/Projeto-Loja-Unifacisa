import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './product';

describe('ProductService', () => {
  it('should be created', () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    expect(TestBed.inject(ProductService)).toBeTruthy();
  });
});
