import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtSortPipe } from './pipe/dt-sort.pipe';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DtSearchPipe } from './pipe/dt-search.pipe';
import { FormsModule } from '@angular/forms';
import { DtPaginationComponent } from './dt-pagination/dt-pagination.component'
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [DtSortPipe,
    ChartsComponent,
    DataTableComponent,
    DtSearchPipe,
    DtPaginationComponent],
  exports: [ChartsComponent, DataTableComponent]
})
export class SharedModule { }
