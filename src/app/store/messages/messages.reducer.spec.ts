import { reducer } from './messages.reducer';
import * as fromMessages from './messages.reducer';

describe('MessagesReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromMessages.initialState);
  });
});

});