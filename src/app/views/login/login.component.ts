import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ){}

  ngOnInit():void {
    this.ceklogin()
  }

  signInGoogleHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      localStorage.setItem("currentUser", JSON.stringify(data));
      this.ceklogin()
    })
  }

  ceklogin() {
    const currentUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
          this.router.navigate(['']);
    }
  }

}
