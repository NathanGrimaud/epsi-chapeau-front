import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Uncomment this line if you want to use the StoreDevtool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
import { HttpClientModule } from '@angular/common/http';

// -- IMPORT SERVICES --
import { MessagesService } from './messages/messages.service';
import { ConversationService } from './conversation/conversation.service';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...AllEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  exports: [],
  providers: [
    // -- PROVIDERS --
    MessagesService,
    ConversationService
  ]
})
export class StoreReduxorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreReduxorModule
    };
  }
}
