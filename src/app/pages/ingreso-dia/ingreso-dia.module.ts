import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoDiaPageRoutingModule } from './ingreso-dia-routing.module';

import { IngresoDiaPage } from './ingreso-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoDiaPageRoutingModule
  ],
  declarations: [IngresoDiaPage]
})
export class IngresoDiaPageModule {}
