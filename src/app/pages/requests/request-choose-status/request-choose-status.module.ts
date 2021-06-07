import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestChooseStatusPageRoutingModule } from './request-choose-status-routing.module';

import { RequestChooseStatusPage } from './request-choose-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestChooseStatusPageRoutingModule
  ],
  declarations: [RequestChooseStatusPage]
})
export class RequestChooseStatusPageModule {}
