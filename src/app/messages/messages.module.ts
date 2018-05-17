import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './response/one/one.component';
import { ListComponent } from './response/list/list.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MatCardModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { FeaturedComponent } from './response/featured/featured.component';
import { LinkifyPipe } from '../shared/linkify.pipe';

@NgModule({
  imports: [CommonModule, MessagesRoutingModule, MatCardModule, MatGridListModule, MatButtonModule],
  declarations: [OneComponent, ListComponent, FeaturedComponent, LinkifyPipe],
  exports: [OneComponent, ListComponent]
})
export class MessagesModule {}
