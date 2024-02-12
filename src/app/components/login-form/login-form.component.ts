import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hidePassword = true;

  email: string = '';
  password: string = '';
  rememberMe: boolean = true;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.isLoggesIn) {
      console.log('User is already logged in');
      this.router.navigate(['/jobs']);
    }
  }
  onSubmit(): void {
    console.log(
      'Email:',
      this.email,
      'Password',
      this.password,
      'Remember me:',
      this.rememberMe
    );
    this.loginService
      .login(this.email, this.password, this.rememberMe)
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('User is logged in');
          this.router.navigate(['/jobs']);
        }
      });
  }
  logCheckboxStatus(): void {
    console.log('Remember Me:', this.rememberMe);
  }
}
