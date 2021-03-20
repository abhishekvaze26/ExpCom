import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'visit-form',
    loadChildren: () =>
      import('./folder/visit-form/visit-form.module').then(
        (m) => m.VisitFormPageModule
      ),
  },
  {
    path: 'visit-logs',
    loadChildren: () =>
      import('./folder/visit-logs/visit-logs.module').then(
        (m) => m.VisitLogsPageModule
      ),
  },
  {
    path: 'news-listing',
    loadChildren: () =>
      import('./folder/news-listing/news-listing.module').then(
        (m) => m.NewsListingPageModule
      ),
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () =>
  //     import('./folder/folder.module').then((m) => m.FolderPageModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
