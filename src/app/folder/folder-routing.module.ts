import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'visit-form',
    loadChildren: () => import('./visit-form/visit-form.module').then( m => m.VisitFormPageModule)
  },
  {
    path: 'visit-logs',
    loadChildren: () => import('./visit-logs/visit-logs.module').then( m => m.VisitLogsPageModule)
  },
  {
    path: 'news-listing',
    loadChildren: () => import('./news-listing/news-listing.module').then( m => m.NewsListingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
