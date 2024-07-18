import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridDataRoutingModule } from './grid-data-routing.module';
import { GridDataComponent } from './grid-data.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GridDataComponent
  ],
  imports: [
    SharedModule,
    GridDataRoutingModule
  ]
})
export class GridDataModule { }
