import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDataComponent } from './chart-data.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartDataRoutingModule { }
