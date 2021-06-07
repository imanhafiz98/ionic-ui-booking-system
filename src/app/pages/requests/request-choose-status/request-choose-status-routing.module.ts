import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestChooseStatusPage } from './request-choose-status.page';

const routes: Routes = [
  {
    path: '',
    component: RequestChooseStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestChooseStatusPageRoutingModule {}
