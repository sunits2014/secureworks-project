import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AgGridAngular
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AgGridAngular,
    HeaderComponent
  ]
})
export class SharedModule { }
