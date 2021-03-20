import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitLogsPageRoutingModule } from './visit-logs-routing.module';

import { VisitLogsPage } from './visit-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitLogsPageRoutingModule
  ],
  declarations: [VisitLogsPage]
})
export class VisitLogsPageModule {}
