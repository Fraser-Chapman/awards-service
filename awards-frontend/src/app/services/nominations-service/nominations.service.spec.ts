import { TestBed } from '@angular/core/testing';

import { NominationsService } from './nominations.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('NominationsService', () => {
  let service: NominationsService;
  let httpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NominationsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('submitNominations', () => {

    it('should post to nominations api', () => {
      const httpClientSpy = spyOn(httpClient, 'post');
      const category = 'category';
      const nomination = 'name';
      const expectedPayload = {};
      expectedPayload[category] = nomination;
      const payload = new Map<string, string>();
      payload.set(category, nomination);

      service.submitNotifications$(payload);

      expect(httpClientSpy).toHaveBeenCalledWith('/api/nominations', expectedPayload);
    });
  });
});
