import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MessagesModule } from './messages/messages.module';
import { WebCamModule } from 'ack-angular-webcam';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreReduxorModule } from './store/store-reduxor.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MessagesModule,
    WebCamModule,
    HttpModule,
    StoreReduxorModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
