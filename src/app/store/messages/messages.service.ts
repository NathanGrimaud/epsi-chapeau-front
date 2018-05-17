import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class MessagesService {
  constructor(private http: HttpClient) {}

  createMessages(param: any): Observable<any> {
    return this.http.post(`${environment.image_api}/message`, param);
  }
}
