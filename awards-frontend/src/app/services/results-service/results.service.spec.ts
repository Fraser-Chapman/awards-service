import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResultsService', () => {
  let service: ResultsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ResultsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchResults', () => {

    it('should send get request to get results endpoint', () => {
      const httpClientSpy = spyOn(httpClient, 'get');

      service.fetchResults();

      expect(httpClientSpy).toHaveBeenCalledWith('/api/awards');
    });
  });
});
