import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../_nav';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ){}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout = async () => {
    await this.authService.signOut();
    localStorage.removeItem('currentUser');
    this.router.navigate(['login'])
  }
}
