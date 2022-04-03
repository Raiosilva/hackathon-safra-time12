import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private canUserAuth = false;
  private TOKEN_KEY = 'id_token';

  constructor(private router: Router) { }

  public logar(user: string) {
    localStorage.setItem(this.TOKEN_KEY, user);
  }

  public exit() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
