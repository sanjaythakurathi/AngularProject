import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})

export class AppBarComponent  {
  activeMenuItem: string = '/home';
  isMobileMenuVisible: boolean = false;
  items: MenuItem[] = [];
  mobileMenuContent: string = ''; // Define the variable to hold the menu content

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuItem(event.urlAfterRedirects);
      }
    });
  }

  // ngOnInit(): void {
  //   this.items = [
  //     { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
  //     { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
  //     { label: 'Services', icon: 'pi pi-cog', routerLink: '/services' },
  //     { label: 'Portfolio', icon: 'pi pi-images', routerLink: '/portfolio' },
  //     { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
  //     { label: 'Hierarchy', icon: 'pi pi-users', routerLink: '/hierarchy' }
  //   ];
  // }
  
  setActiveMenuItem(url: string) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      if (item.getAttribute('href') === url) {
        this.renderer.addClass(item, 'active');
      } else {
        this.renderer.removeClass(item, 'active');
      }
    });

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
      this.activeMenuItem = '/';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuVisible = true;
    if (this.isMobileMenuVisible) {
      this.copyMenuContentToMobileMenu();
      this.renderer.addClass(document.body, 'mobile-menu-visible');
    } else {
      this.renderer.removeClass(document.body, 'mobile-menu-visible');
    }
  }

  copyMenuContentToMobileMenu() {
    // Copy the main menu content to the mobile menu
    const mainMenu = document.querySelector('.header-area .menu-area .main-menu');
    if (mainMenu) {
      this.mobileMenuContent = mainMenu.innerHTML;
    }
  }
  
}
