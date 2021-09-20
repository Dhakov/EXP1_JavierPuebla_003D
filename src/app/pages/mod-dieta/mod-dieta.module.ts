import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModDietaPageRoutingModule } from './mod-dieta-routing.module';

import { ModDietaPage } from './mod-dieta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModDietaPageRoutingModule
  ],
  declarations: [ModDietaPage]
})
export class ModDietaPageModule {}
