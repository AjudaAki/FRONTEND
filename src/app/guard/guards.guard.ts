import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot ,CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { GetTokenService } from '../services/getToken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateFn {

  constructor(private token: GetTokenService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.token.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}