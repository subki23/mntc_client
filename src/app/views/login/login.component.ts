import { 
  Component, 
  OnInit, 
  // NgZone 
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    // ngZone:NgZone
  ){
    // window['onSignIn'] = (user:any) => ngZone.run(
    //   () => {
    //     this.afterSignUp(user);
    //   }
    // )
  }

  ngOnInit():void {
  }

  // afterSignUp(googleUser:any){
  //   this.socialAuthService = googleUser.getId()
  // }

  // logOut(googleUser:any): void {
  //   googleUser.signOut();
  // }

}
