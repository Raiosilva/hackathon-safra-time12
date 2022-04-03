import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public rt!: boolean;
  constructor(private autheService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const value = localStorage.getItem("TOKEN_KEY")
    console.log('value: ', localStorage.getItem("TOKEN_KEY"));

    return this.check(state.url);
  }

  check(path: string) {
    const user = localStorage.getItem("TOKEN_KEY") ? JSON.parse(localStorage.getItem("TOKEN_KEY") || "") : undefined;
    if (path == '/invest-feature/invest') {
      const rtn = user != undefined;
      if (!rtn) {
        this.router.navigate(['/invest-feature/main']);

        this.rt = false;
      } else {
        this.rt = true;
      }
    }

    return this.rt;
  }
}
