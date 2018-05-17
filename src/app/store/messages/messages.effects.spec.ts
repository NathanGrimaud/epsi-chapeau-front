import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { MessagesEffects } from "./messages.effects";
import { MessagesService } from "./messages.service";

describe('MessagesEffects', () => {
  let runner, messagesEffects, messagesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      MessagesEffects,
      {
        provide: MessagesService,
        useValue: jasmine.createSpyObj('messagesService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    messagesEffects = TestBed.get(MessagesEffects);
    messagesService = TestBed.get(MessagesService);
  });

  describe('messages$', () => {

    it('should return a LOAD_MESSAGES_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_MESSAGES_FAIL action, on error', function () {

    });

  });

});
