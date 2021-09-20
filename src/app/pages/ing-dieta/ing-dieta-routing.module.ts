import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngDietaPage } from './ing-dieta.page';

const routes: Routes = [
  {
    path: '',
    component: IngDietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngDietaPageRoutingModule {}
