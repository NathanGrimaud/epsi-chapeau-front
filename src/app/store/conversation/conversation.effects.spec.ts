import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ConversationEffects } from "./conversation.effects";
import { ConversationService } from "./conversation.service";

describe('ConversationEffects', () => {
  let runner, conversationEffects, conversationService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      ConversationEffects,
      {
        provide: ConversationService,
        useValue: jasmine.createSpyObj('conversationService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    conversationEffects = TestBed.get(ConversationEffects);
    conversationService = TestBed.get(ConversationService);
  });

  describe('conversation$', () => {

    it('should return a LOAD_CONVERSATION_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_CONVERSATION_FAIL action, on error', function () {

    });

  });

});
