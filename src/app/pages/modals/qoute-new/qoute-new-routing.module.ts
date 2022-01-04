import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QouteNewPage } from './qoute-new.page';

const routes: Routes = [
  {
    path: '',
    component: QouteNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QouteNewPageRoutingModule {}
