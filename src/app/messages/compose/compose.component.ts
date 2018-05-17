import { Component, OnInit } from '@angular/core';
import { State } from '../../store/app.store';
import { Store } from '@ngrx/store';
import { CreateMessagesAction } from '../../store/messages/messages.actions';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  constructor(private store: Store<State>) {}
  question: String = '';
  ngOnInit() {}

  onClick() {
    this.store.dispatch(new CreateMessagesAction(this.question));
  }
}
