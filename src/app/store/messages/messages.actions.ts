import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from './messages.reducer';

export const CREATE_MESSAGES = '[Messages] Get Messages';
export const CREATE_MESSAGES_SUCCESS = '[Messages] Get Messages Success';
export const CREATE_MESSAGES_FAIL = '[Messages] Get Messages Fail';
export const SET_MESSAGES = '[Messages] Set Messages';
/**
 * Create Messages Actions
 */
export class CreateMessagesAction implements Action {
  readonly type = CREATE_MESSAGES;

  constructor(public payload: any) {}
}

export class CreateMessagesSuccessAction implements Action {
  readonly type = CREATE_MESSAGES_SUCCESS;

  constructor(public payload: any) {}
}

export class SetMessagesAction implements Action {
  readonly type = SET_MESSAGES;
  constructor(public payload: Message) {}
}

export class CreateMessagesFailAction implements Action {
  readonly type = CREATE_MESSAGES_FAIL;

  constructor(public error: HttpErrorResponse) {}
}

export type Actions =
  | CreateMessagesAction
  | CreateMessagesSuccessAction
  | CreateMessagesFailAction
  | SetMessagesAction;
