import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
const routes: Routes = [{ path: 'messages/compose', component: ComposeComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [ComposeComponent],
  exports: [RouterModule, ComposeComponent]
})
export class MessagesRoutingModule {}
