import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  activeTab: number = 0;

  showTab(index: number): void {
    this.activeTab = index;
  }

  isTabActive(index: number): boolean {
    return this.activeTab === index;
  }
}
