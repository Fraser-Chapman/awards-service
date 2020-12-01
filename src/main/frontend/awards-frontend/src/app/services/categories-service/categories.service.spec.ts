import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [CategoriesService]
  }));

  it('should be created', () => {
    const service: CategoriesService = TestBed.inject(CategoriesService);
    expect(service).toBeTruthy();
  });
});
