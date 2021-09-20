import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngDietaPageRoutingModule } from './ing-dieta-routing.module';

import { IngDietaPage } from './ing-dieta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngDietaPageRoutingModule
  ],
  declarations: [IngDietaPage]
})
export class IngDietaPageModule {}
