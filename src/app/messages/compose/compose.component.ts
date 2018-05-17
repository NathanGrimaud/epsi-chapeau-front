import { Component, OnInit } from '@angular/core';
import { State } from '../../store/app.store';
import { Store } from '@ngrx/store';
import { CreateMessagesAction, SetMessagesAction } from '../../store/messages/messages.actions';
import { take, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  constructor(private store: Store<State>) {}
  mood: Store<any>;
  question: string = '';
  ngOnInit() {}

  onClick() {
    this.store.dispatch(
      new SetMessagesAction({ sender: 'pole', side: 'right', content: this.question })
    );
    this.mood = this.store.select(state => state.conversation.mood);
    this.mood.subscribe();
    const mood$ = this.store.select(state => state.conversation.mood);
    const id$ = this.store.select(state => state.conversation.result);

    const combined = combineLatest(mood$, id$);
    combined.subscribe((res: any[]) => {
      const mood = res[0];
      const { id } = res[1];
      const payload = {
        content: this.question,
        mood: mood,
        conversationId: id
      };
      this.store.dispatch(new CreateMessagesAction(payload));
    });
  }
}
