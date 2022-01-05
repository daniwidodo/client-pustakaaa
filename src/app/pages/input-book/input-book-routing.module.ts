import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputBookPage } from './input-book.page';

const routes: Routes = [
  {
    path: '',
    component: InputBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputBookPageRoutingModule {}
