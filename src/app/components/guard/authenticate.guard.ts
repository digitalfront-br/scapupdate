import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    const token = user?.api_token;
    if(user != null) {
      if(token){
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
