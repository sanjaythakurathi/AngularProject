import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  activeMenuItem: string='/home';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuItem(event.urlAfterRedirects);
      }
    });
  }

  setActiveMenuItem(url: string) {
    if (url.includes('/home')) {
      this.activeMenuItem = 'home';
    } else if (url.includes('/about')) {
      this.activeMenuItem = 'about';
    } else if (url.includes('/services')) {
      this.activeMenuItem = 'services';
    } else if (url.includes('/portfolio')) {
      this.activeMenuItem = 'portfolio';
    } else if (url.includes('/contact')) {
      this.activeMenuItem = 'contact';
    } else if (url.includes('/hierarchy')) {
      this.activeMenuItem = 'hierarchy';
    } else {
      this.activeMenuItem = '';
    }
  }
}
