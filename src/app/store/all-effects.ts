// -- IMPORT --
import { MessagesEffects } from './messages/messages.effects';
import { ConversationEffects } from './conversation/conversation.effects';

export const AllEffects = [
  // -- LIST --
  MessagesEffects,
  ConversationEffects
];
