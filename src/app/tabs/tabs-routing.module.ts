import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'choose-category',
        loadChildren: () => import('../pages/services/choose-category/choose-category.module').then( m => m.ChooseCategoryPageModule)
      },
      {
        path: 'request-choose-status',
        loadChildren: () => import('../pages/requests/request-choose-status/request-choose-status.module').then( m => m.RequestChooseStatusPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
