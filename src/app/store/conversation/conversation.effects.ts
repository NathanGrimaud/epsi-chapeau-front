import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { ConversationService } from './conversation.service';
import * as conversationActions from './conversation.actions';

@Injectable()
export class ConversationEffects {
  @Effect() loadConversation$;
  
  constructor(
    private conversationService: ConversationService,
    private actions$: Actions
  ) {
    this.loadConversation$ = this.actions$
      .ofType(conversationActions.LOAD_CONVERSATION)
      .pipe(switchMap((state: conversationActions.LoadConversationAction) => 
        this.conversationService.loadConversation().pipe(
          // If successful, dispatch success action with result
          map(res => new conversationActions.LoadConversationSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: Error) => observableOf(new conversationActions.LoadConversationFailAction(err)))
        )
      )
      );
  }

}
