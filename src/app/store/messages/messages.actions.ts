import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const CREATE_MESSAGES = '[Messages] Get Messages';
export const CREATE_MESSAGES_SUCCESS = '[Messages] Get Messages Success';
export const CREATE_MESSAGES_FAIL = '[Messages] Get Messages Fail';

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

export class CreateMessagesFailAction implements Action {
  readonly type = CREATE_MESSAGES_FAIL;

  constructor(public error: HttpErrorResponse) {}
}

export type Actions = CreateMessagesAction | CreateMessagesSuccessAction | CreateMessagesFailAction;
