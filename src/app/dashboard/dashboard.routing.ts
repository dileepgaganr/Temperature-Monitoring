import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';



const dashRoutes: Routes = [
    { path: '', component: DeviceDetailsComponent },
    { path: 'Analytics', component: AnalyticsComponent },
    { path: 'DeviceDetails', component: DeviceDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashRoutes)],
    exports: [RouterModule],
})
export class DashRoutingModule { }

