import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { setTimeout } from 'timers';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    userTimeOut:any = "";
	constructor(
        private router: Router,
        private authenticationService: ApiService
    ) {}
    
  	canActivate(
    	next: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot) {
    	const currentUser:any = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser);
        // setTimeout(() => {
        //     this.userTimeOut = currentUser;
        // }, 5000);
        // console.log(currentUser);
        if (currentUser != null) {
          
          if (currentUser.status != false) {
              // authorised so return true
              return true;
          }
          
        }

        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        this.router.navigate(['login']);
        return false;
  	}
}
