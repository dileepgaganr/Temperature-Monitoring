import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceLocationComponent } from './device-location/device-location.component';
import { DeviceStatusComponent } from './device-status/device-status.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DashRoutingModule } from './dashboard.routing';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { AgmCoreModule } from '@agm/core/core.module';
import { environment } from '../../environments/environment';
import { ComponentInteractionService } from './services/component-interaction.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DashRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    SharedModule
  ],
  declarations: [DeviceLocationComponent,
    DeviceStatusComponent,
    DeviceListComponent,
    AnalyticsComponent,
    DeviceDetailsComponent,
    ],
  providers: [ComponentInteractionService],


})
export class DashboardModule { }