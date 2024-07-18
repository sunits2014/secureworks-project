import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeResolver } from './route.resolver';
import { HeaderConstants } from './header/header.constants';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {headerInfo: HeaderConstants.Home}    
  },
  {
    path: 'grid-data',
    loadChildren: () => import('./grid-data/grid-data.module').then(m => m.GridDataModule),
    data: {headerInfo: HeaderConstants.GridData},
    resolve: {repos: routeResolver}
  },
  {
    path: 'chart-data',
    loadChildren: () => import('./chart-data/chart-data.module').then(m => m.ChartDataModule),
    data: {headerInfo: HeaderConstants.ChartData},
    resolve: {repos: routeResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
