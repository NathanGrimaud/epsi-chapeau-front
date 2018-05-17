import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages/compose',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [];
