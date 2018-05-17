import { Action } from '@ngrx/store';

export const LOAD_CONVERSATION = '[Conversation] Load Conversation';
export const LOAD_CONVERSATION_SUCCESS = '[Conversation] Load Conversation Success';
export const LOAD_CONVERSATION_FAIL = '[Conversation] Load Conversation Fail';
export const SET_MOOD = '[Conversation] Set Mood';

/**
 * Load Conversation Actions
 */
export class LoadConversationAction implements Action {
  readonly type = LOAD_CONVERSATION;

  constructor() {}
}

export class LoadConversationSuccessAction implements Action {
  readonly type = LOAD_CONVERSATION_SUCCESS;

  constructor(public payload: any) {}
}

export class SetMoodAction implements Action {
  readonly type = SET_MOOD;

  constructor(public payload: string) {}
}
export class LoadConversationFailAction implements Action {
  readonly type = LOAD_CONVERSATION_FAIL;

  constructor(public error: Error) {}
}

export type Actions =
  | LoadConversationAction
  | LoadConversationSuccessAction
  | LoadConversationFailAction
  | SetMoodAction;
