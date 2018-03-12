import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthmanagerGuard } from './auth/authmanager.guard';




const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent },
    {
        path: 'Dashboard', 
        component: AppDashboardComponent,
        canLoad:[AuthmanagerGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'Users', 
        component: AppDashboardComponent,
        canLoad:[AuthmanagerGuard],
        loadChildren: './users/users.module#UsersModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthmanagerGuard]
})
export class AppRoutingModule { }

