import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userMail: string = 'test@test.com';
  userPassword: string = 'test1234';
  private isUserLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isLoggesIn$ = this.isUserLoggedIn.asObservable();
  constructor() {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    if (isUserLoggedIn) {
      this.isUserLoggedIn.next(JSON.parse(isUserLoggedIn));
    }
  }

  login(
    email: string,
    password: string,
    rememberMe: boolean
  ): Observable<boolean> {
    const isUserValid =
      email === this.userMail && password === this.userPassword;
    this.isUserLoggedIn.next(isUserValid);
    if (rememberMe) {
      localStorage.setItem('isUserLoggedIn', isUserValid.toString());
    }
    return this.isLoggesIn$;
  }

  logout(): void {
    this.isUserLoggedIn.next(false);
  }
  get isLoggesIn(): boolean {
    return this.isUserLoggedIn.value;
  }
}
