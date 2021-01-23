import { TestBed } from '@angular/core/testing';

import { NominationsService } from './nominations.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {IdService} from '../id-service/id.service';
import createSpyObj = jasmine.createSpyObj;

describe('NominationsService', () => {
  let service: NominationsService;
  let httpClient;
  const idServiceStub = createSpyObj(IdService, ['getUniqueId']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: IdService, useValue: idServiceStub}
      ]
    });
    service = TestBed.inject(NominationsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('submitNominations', () => {

    it('should post to nominations api', () => {
      const userId = 'userId';
      idServiceStub.getUniqueId.and.returnValue(userId);
      const httpClientSpy = spyOn(httpClient, 'post');
      const category = 'category';
      const nomination = 'name';
      const expectedPayload = {};
      expectedPayload[category] = nomination;
      const payload = new Map<string, string>();
      payload.set(category, nomination);

      service.submitNotifications$(payload);

      expect(httpClientSpy).toHaveBeenCalledWith(`/api/nominations/${userId}`, expectedPayload);
    });

    it('should get user Id from ID Service', () => {
      const payload = new Map<string, string>();

      service.submitNotifications$(payload);

      expect(idServiceStub.getUniqueId).toHaveBeenCalled();
    });
  });
});
