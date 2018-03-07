import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [DashboardSidebarComponent, DashboardHeaderComponent, DashboardFooterComponent],
  exports:[DashboardFooterComponent,DashboardHeaderComponent,DashboardSidebarComponent],
  providers:[]
})
export class DashboardLayoutModule { }
