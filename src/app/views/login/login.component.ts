import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private alerts: AlertsService
  ) {}
  loginInfo = <any>{};
  loginUser() {
    this.loginService.authenticateUser(this.loginInfo).subscribe(
      (data: any) => {
        console.log(data.status);
        console.log(data);
        console.log(this.loginInfo.userName);
        console.log(data['userName']);

        if (data['userName'] === this.loginInfo.userName) {
          this.router.navigate(['dashboard']);
          localStorage.setItem('accessLevel', data.accessLevel);
          if (data.accessLevel === 1) {
            localStorage.setItem('userType', 'Admin');
          } else if (data.accessLevel === 2) {
            localStorage.setItem('userType', 'Vendor');
          }
          this.alerts.setMessage('Successfully logged In !', 'success');
        } else {
          alert('Invalid Login');
        }
      },
      error => {
        this.alerts.setMessage('Invalid Login !', 'error');
      }
    );
  }
}
