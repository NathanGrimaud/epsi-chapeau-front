import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

// -- IMPORT REDUCER --
import * as messages from './messages/messages.reducer';
import * as conversation from './conversation/conversation.reducer';

export interface State {
  // -- IMPORT STATE --
  messages: messages.MessagesState;
  conversation: conversation.ConversationState;
}

export const reducers: ActionReducerMap<State> = {
  // -- ADD REDUCER --
  messages: messages.reducer,
  conversation: conversation.reducer
};

/** For debug purpose */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.groupCollapsed(action.type);
    const nextState = reducer(state, action);
    console.log(`%c previous state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
