import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesService } from './messages.service';
import * as messagesActions from './messages.actions';

@Injectable()
export class MessagesEffects {
  @Effect() create$;

  constructor(private messagesService: MessagesService, private actions$: Actions) {
    this.create$ = this.actions$.ofType(messagesActions.CREATE_MESSAGES).pipe(
      switchMap((state: messagesActions.CreateMessagesAction) =>
        this.messagesService.createMessages(state.payload).pipe(
          // If successful, dispatch success action with result
          map(res => new messagesActions.CreateMessagesSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) =>
            observableOf(new messagesActions.CreateMessagesFailAction(err))
          )
        )
      )
    );
  }
}
