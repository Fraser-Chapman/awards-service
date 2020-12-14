import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NominationsService {

  constructor(private http: HttpClient) { }

  // returning observable of undefined stops the issue of second request not sending
  submitNotifications$(payload: Map<string, string>): Observable<any> {
    const mapAsObject = {};
    payload.forEach((nomination: string, category: string)  => { mapAsObject[category] = nomination; });
    return this.http.post('http://localhost:8080/api/nominations', {userId: 'x', nominations: mapAsObject});
  }
}
