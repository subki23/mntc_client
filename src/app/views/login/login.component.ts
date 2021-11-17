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
    try {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
        var email = data.email
        if ( email.includes("@code.id") ) {
          localStorage.setItem("currentUser", JSON.stringify(data));
        }else{
          this.authService.signOut();
        }
        this.ceklogin()
      })
    } catch (e) {
      console.log(e);
    }
  }

  ceklogin() {
    const currentUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
      this.router.navigate(['']);
    }else{
      this.router.navigate(['login'])
    }
  }

}
