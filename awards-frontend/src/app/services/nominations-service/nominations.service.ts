import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IdService} from '../id-service/id.service';

@Injectable({
  providedIn: 'root'
})
export class NominationsService {

  constructor(private http: HttpClient, private idService: IdService) { }

  submitNotifications$(payload: Map<string, string>): Observable<any> {
    const userId = this.idService.getUniqueId();
    const mapAsObject = {};
    payload.forEach((nomination: string, category: string)  => { mapAsObject[category] = nomination; });

    return this.http.post(`/api/nominations/${userId}`, mapAsObject);
  }
}
