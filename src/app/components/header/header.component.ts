import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    if (this.loginService.isLoggesIn) {
      this.isLoggedIn = this.loginService.isLoggesIn;
    }
  }
}
