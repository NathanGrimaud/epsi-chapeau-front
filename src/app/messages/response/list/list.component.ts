import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../../../store/app.store';
import { Store } from '@ngrx/store';
import { map, tap, skip } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import * as io from 'socket.io-client';
import { SetMessagesAction } from '../../../store/messages/messages.actions';
import { Message } from '../../../store/messages/messages.reducer';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @HostBinding('style.opacity') opacity = 1;

  messages: Store<Message[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .select(state => state.conversation.result)
      .pipe(
        skip(1),
        map((result: any) => {
          const socket = io(environment.image_api, { transports: ['polling'] });
          socket.on('connect', function() {
            console.log('connected');
          });
          socket.on(`response_${result.id}`, payload => {
            console.log('received', payload);
            this.store.dispatch(
              new SetMessagesAction({
                content: payload.content,
                sender: 'bot',
                side: 'left'
              })
            );
          });
        })
      )
      .subscribe();
    this.messages = this.store.select(state => state.messages.messages);
    this.messages
      .pipe(
        skip(1),
        tap(_ => (this.opacity = 0)),
        tap(messages => (this.opacity = 1))
      )
      .subscribe();
  }
}
