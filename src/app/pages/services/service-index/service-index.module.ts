import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceIndexPageRoutingModule } from './service-index-routing.module';

import { ServiceIndexPage } from './service-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceIndexPageRoutingModule
  ],
  declarations: [ServiceIndexPage]
})
export class ServiceIndexPageModule {}
