import * as messages from './messages.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface Message {
  content: string;
  sender: string;
  side: string;
}

export interface MessagesState {
  loading: boolean;
  entities: { [id: string]: any };
  result: any[];
  messages: Message[];
  error: HttpErrorResponse;
  type: string;
}

export const initialState: MessagesState = {
  loading: false,
  entities: {},
  result: [],
  messages: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: messages.Actions): MessagesState {
  switch (action.type) {
    case messages.CREATE_MESSAGES: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      };
    }

    case messages.SET_MESSAGES: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    case messages.CREATE_MESSAGES_SUCCESS: {
      const result = [...state.result, action.payload];
      return {
        ...state,
        result: result,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case messages.CREATE_MESSAGES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}
