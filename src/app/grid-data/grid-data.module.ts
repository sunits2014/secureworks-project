import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridDataRoutingModule } from './grid-data-routing.module';
import { GridDataComponent } from './grid-data.component';
import { SharedModule } from '../shared/shared.module';
import { FilterRowPipe } from './filter-row.pipe';


@NgModule({
  declarations: [
    GridDataComponent,
    FilterRowPipe
  ],
  imports: [
    SharedModule,
    GridDataRoutingModule
  ]
})
export class GridDataModule { }
