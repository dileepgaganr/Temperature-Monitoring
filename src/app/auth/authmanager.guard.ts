import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthmanagerGuard implements CanActivate, CanLoad {


  constructor(

    private router: Router
  ) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage["loggedIn"] == undefined) {
      this.router.navigate(['Login']);
      return false;
    }

    return true;
  }

  canLoad(route: Route): boolean {
    if (localStorage["loggedIn"] == undefined) {
      this.router.navigate(['Login']);
      return false;
    }

    return true;

  }
}
