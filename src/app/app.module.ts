import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';
import { Configuration } from './shared/configuration';
import { environment } from '../environments/environment';
import { DetailsService } from './services/details.service';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DashboardLayoutModule,
    ReactiveFormsModule

  ],
  providers: [Configuration, DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
