import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UserRouteModule } from './users.routing';
import { UserService } from './services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRouteModule,
    SharedModule
  ],
  declarations: [ManageusersComponent, AddUserComponent],
  providers:[UserService]
})
export class UsersModule { }
