import * as messages from './messages.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface MessagesState {
  loading: boolean;
  entities: { [id: string]: any };
  result: any[];
  question: string;
  responses: string[];
  error: HttpErrorResponse;
  type: string;
}

export const initialState: MessagesState = {
  loading: false,
  entities: {},
  result: [],
  question: null,
  responses: [],
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

    case messages.CREATE_MESSAGES_SUCCESS: {
      const result = [...state.result, action.payload];
      return {
        ...state,
        result: result,
        loading: false,
        question: action.payload.question,
        responses: action.payload.results,
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
