import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridDataComponent } from './grid-data.component';

const routes: Routes = [
  {
    path: '',
    component: GridDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridDataRoutingModule { }
