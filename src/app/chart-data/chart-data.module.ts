import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDataRoutingModule } from './chart-data-routing.module';
import { ChartDataComponent } from './chart-data.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChartDataComponent
  ],
  imports: [
    SharedModule,
    ChartDataRoutingModule
  ]
})
export class ChartDataModule { }
