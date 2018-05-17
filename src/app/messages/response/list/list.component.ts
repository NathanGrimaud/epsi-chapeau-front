import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../../../store/app.store';
import { Store } from '@ngrx/store';
import { map, tap, skip } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import * as io from 'socket.io-client';
import { SetMessagesAction } from '../../../store/messages/messages.actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @HostBinding('style.flex-grow') grow = 0;
  @HostBinding('style.opacity') opacity = 1;

  messages: Store<string[]>;
  question: Store<string>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .select(state => state.conversation.result)
      .pipe(
        skip(1),
        map((result: any) => {
          const socket = io(environment.image_api);
          socket.on('connect', function() {
            console.log('connected', result.id);
          });
          socket.on(`response_${result.id}`, payload => {
            console.log('got response', payload);
            const result = {
              question: 'salut',
              responses: ['des nouveaux messages, YAY']
            };
            console.log('dispatching, ', result);
            this.store.dispatch(new SetMessagesAction(result));
          });
          console.log('got id', result.id);
        })
      )
      .subscribe();
    this.messages = this.store.select(state => state.messages.responses);
    this.question = this.store.select(state => state.messages.question);
    this.messages
      .pipe(
        skip(1),
        tap(_ => (this.opacity = 0)),
        tap(messages => (this.grow = 5)),
        tap(messages => (this.opacity = 1))
      )
      .subscribe();
  }
}
