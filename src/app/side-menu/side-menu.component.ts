import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Output() drawerToggled = new EventEmitter<void>();

  // toggleDrawer() {
  //   this.drawerToggled.emit();
  // }
  isDrawerOpened = false;
  drawerWidth = 200;
  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }
}