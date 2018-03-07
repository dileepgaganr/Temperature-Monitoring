import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { LoginComponent } from './login/login.component';




const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent },
    {
        path: 'Dashboard', component: AppDashboardComponent,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'Users', component: AppDashboardComponent,
        loadChildren: './users/users.module#UsersModule'
    },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }

