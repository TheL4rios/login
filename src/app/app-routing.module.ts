import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./user/gallery/view-gallery/view-gallery.module').then( m => m.ViewGalleryPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./user/profile/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'view-gallery',
    loadChildren: () => import('./user/gallery/view-gallery/view-gallery.module').then( m => m.ViewGalleryPageModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./user/register/new-user/new-user.module').then( m => m.NewUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
