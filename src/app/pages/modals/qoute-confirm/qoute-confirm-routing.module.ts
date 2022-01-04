import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QouteConfirmPage } from './qoute-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: QouteConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QouteConfirmPageRoutingModule {}
