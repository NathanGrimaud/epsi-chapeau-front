import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import v4 from 'uuid/v4';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';
import { flatMap, map, tap, mergeMap } from 'rxjs/operators';
import { Observer, from } from 'rxjs';

@Injectable()
export class ConversationService {
  constructor(private http: HttpClient) {}

  loadConversation(): Observable<any> {
    return this.http.post(`${environment.image_api}/conversation`, {});
  }
}
