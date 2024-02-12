import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@App/Common/Guards/Auth.Guard';
// import { RoleGuard } from '@App/Common/Guards/Role.Guard';
import { InnerContainer } from './InnerContainer';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';

export const routes: Routes = [
  {
    path: '',
    component: InnerContainer,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@App/Features/Home/Home').then((c) => c.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@App/Features/About/About').then((c) => c.AboutComponent),
      },
      {
        path: 'contactus',
        loadComponent: () =>
          import('@App/Features/Contact/Contact').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'artworks',
        loadComponent: () =>
          import('@App/Features/Art/Art').then((c) => c.ArtComponent),
      },
      {
        path: 'artworks/:project',
        loadComponent: () =>
          import('@App/Features/Art/Art').then((c) => c.ArtComponent),
      },
      // { path: '', redirectTo: 'RoutePaths.Home', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: RoutePaths.Default,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnerContainerRoutes { }
