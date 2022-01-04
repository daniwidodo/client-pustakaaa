import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QouteConfirmPageRoutingModule } from './qoute-confirm-routing.module';

import { QouteConfirmPage } from './qoute-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QouteConfirmPageRoutingModule
  ],
  declarations: [QouteConfirmPage]
})
export class QouteConfirmPageModule {}
