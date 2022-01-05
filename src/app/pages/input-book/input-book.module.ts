import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputBookPageRoutingModule } from './input-book-routing.module';

import { InputBookPage } from './input-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputBookPageRoutingModule
  ],
  declarations: [InputBookPage]
})
export class InputBookPageModule {}
