import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitLogsPage } from './visit-logs.page';

const routes: Routes = [
  {
    path: '',
    component: VisitLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitLogsPageRoutingModule {}
