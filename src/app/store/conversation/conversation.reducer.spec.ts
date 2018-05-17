import { reducer } from './conversation.reducer';
import * as fromConversation from './conversation.reducer';

describe('ConversationReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromConversation.initialState);
  });
});

});