import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModDietaPage } from './mod-dieta.page';

const routes: Routes = [
  {
    path: '',
    component: ModDietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModDietaPageRoutingModule {}
