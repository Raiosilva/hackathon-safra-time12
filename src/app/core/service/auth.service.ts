import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('bank_account');

    return !token;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
  // private canUserAuth = false;
  // private TOKEN_KEY = 'id_token';

  // constructor(private router: Router) { }

  // public logar(user: string) {
  //   window.localStorage.setItem(this.TOKEN_KEY, user);
  // }

  // public exit() {
  //   localStorage.removeItem(this.TOKEN_KEY);
  // }
}
