import * as conversation from './conversation.actions';
import * as io from 'socket.io-client';
export interface ConversationState {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: Error;
  mood: String;
  socket: SocketIOClient.Socket;
  type: string;
}

export const initialState: ConversationState = {
  loading: false,
  entities: {},
  result: [],
  mood: 'neutral',
  error: null,
  socket: null,
  type: ''
};

export function reducer(state = initialState, action: conversation.Actions): ConversationState {
  switch (action.type) {
    case conversation.LOAD_CONVERSATION: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      };
    }
    case conversation.SET_MOOD: {
      return {
        ...state,
        mood: action.payload
      };
    }

    case conversation.LOAD_CONVERSATION_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case conversation.LOAD_CONVERSATION_FAIL: {
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
