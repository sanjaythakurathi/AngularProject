import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements AfterViewInit {
  isMobileMenuVisible: boolean = false;
  mobileMenuContent: string = '';

  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Copy the main menu content to the mobile menu
    const mainMenu = document.querySelector('.header-area .menu-area .main-menu');
    if (mainMenu) {
      this.mobileMenuContent = mainMenu.innerHTML;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
    if (this.isMobileMenuVisible) {
      this.renderer.addClass(document.body, 'mobile-menu-visible');
    } else {
      this.renderer.removeClass(document.body, 'mobile-menu-visible');
    }
  }

  hideMobileMenu(): void {
    this.isMobileMenuVisible = false;
    this.renderer.removeClass(document.body, 'mobile-menu-visible');
  }
}
