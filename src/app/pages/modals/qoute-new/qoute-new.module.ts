import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QouteNewPageRoutingModule } from './qoute-new-routing.module';

import { QouteNewPage } from './qoute-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    QouteNewPageRoutingModule
  ],
  declarations: [QouteNewPage]
})
export class QouteNewPageModule {}
