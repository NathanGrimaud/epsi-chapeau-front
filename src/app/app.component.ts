import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { map, merge, tap, mergeMap, startWith, catchError } from 'rxjs/operators';
import { WebCamComponent } from 'ack-angular-webcam';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { AppService } from './app.service';
import { Observable, empty } from 'rxjs';
import { State } from './store/app.store';
import { Store } from '@ngrx/store';
import { LoadConversationAction, SetMoodAction } from './store/conversation/conversation.actions';
const moods = {
  VERY_UNLIKELY: 'VERY_UNLIKELY',
  UNLIKELY: 'UNLIKELY',
  LIKELY: 'LIKELY',
  VERY_LIKELY: 'VERY_LIKELY'
};
const neutral = 'neutral';
const moodsType = [
  'joyLikelihood',
  'sorrowLikelihood',
  'angerLikelihood',
  'surpriseLikelihood',
  'underExposedLikelihood',
  'blurredLikelihood',
  'headwearLikelihood'
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  webcam: WebCamComponent;
  mood: Store<any>;
  id: Store<any>;
  constructor(private appService: AppService, private store: Store<State>) {}
  ngOnInit() {
    this.store.dispatch(new LoadConversationAction());
    this.mood = this.store.select(state => state.conversation.mood);
    this.id = this.store.select(state => state.conversation.result);
    this.id.subscribe();
    const source$ = interval(10000);
    this.store
      .select(state => state.messages.messages)
      .pipe(
        map(() => {
          setTimeout(() => {
            console.log('will scroll');
            const element = document.querySelector('body > app-root > div > app-list');
            element.scrollTop = element.scrollHeight;
          }, 100);
        })
      )
      .subscribe();
    source$
      .pipe(
        mergeMap(() => fromPromise(this.getBase64())),
        mergeMap((base64: Blob) => this.appService.postPicture(base64)),
        map(response => {
          const payload = response.json();
          if (payload.annotations) {
            const verry = moodsType.find(mood => payload.annotations[mood] === moods.VERY_LIKELY);
            const abit = moodsType.find(mood => payload.annotations[mood] === moods.LIKELY);
            const mood = verry !== undefined ? verry : abit !== undefined ? abit : neutral;

            this.store.dispatch(new SetMoodAction('headwearLikelihood'));
          }
        }),
        catchError((err, caught) => {
          console.log(err);
          return empty();
        })
      )
      .subscribe();
    source$.subscribe();
  }

  reload() {
    window.location.reload();
  }
  getBase64() {
    return this.webcam
      .getBase64()
      .then(base => base)
      .then(picture => fetch(picture).then(response => response.blob()))
      .catch(e => console.error(e));
  }

  onCamError(err) {}

  onCamSuccess() {}
}
