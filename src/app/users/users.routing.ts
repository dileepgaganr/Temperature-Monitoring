import { NgModule } from "@angular/core";
import { RouterModule ,Routes} from "@angular/router";
import { ManageusersComponent } from "./manageusers/manageusers.component";


const userRoutes: Routes = [
    { path: '', component: ManageusersComponent },
]

@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})

export class UserRouteModule{
}

