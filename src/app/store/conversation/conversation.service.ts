import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import v4 from 'uuid/v4';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';
import { flatMap } from 'rxjs/operators';
import { Observer } from 'rxjs';

function connectSocket(id: string) {
  console.log('id', id);
  return Observable.create((observer: Observer<any>) => {
    const socket = io(environment.image_api);
    socket.on('connect', () => {
      observer.next({ id, socket });
    });
  });
}
@Injectable()
export class ConversationService {
  constructor(private http: HttpClient) {}

  loadConversation(): Observable<any> {
    return this.http
      .post(`${environment.image_api}/conversation`, {})
      .pipe(flatMap((id: string) => connectSocket(id)));
  }
}
