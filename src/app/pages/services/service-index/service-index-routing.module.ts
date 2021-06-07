import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceIndexPage } from './service-index.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceIndexPageRoutingModule {}
