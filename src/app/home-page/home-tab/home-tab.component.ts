import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent {
  activeTab: number = 0;

  showTab(index: number): void {
    this.activeTab = index;
  }

  isTabActive(index: number): boolean {
    return this.activeTab === index;
  }
}
