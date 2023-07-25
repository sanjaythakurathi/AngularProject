import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppBarComponent } from './app-bar/app-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RemovePTagPipe } from './remove-ptag.pipe';
import { ApiPostDataComponent } from './api-post-data/api-post-data.component';
import { OurMissionComponent } from './about-us/our-mission/our-mission.component';
import { SupportServiceComponent } from './home-page/support-service/support-service.component';
import { AboutAreaComponent } from './home-page/about-area/about-area.component';
import { HomeServiceComponent } from './home-page/home-service/home-service.component';
import { HomeTabComponent } from './home-page/home-tab/home-tab.component';
import { MainBannerComponent } from './home-page/main-banner/main-banner.component';


@NgModule({
  declarations: [
    
    AppComponent,
    AppBarComponent,
    HomePageComponent,
    AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactUsComponent,
    HierarchyComponent,
    SideMenuComponent,
    FooterComponent,
    TabsComponent,
    PrivacyPolicyComponent,
    MobileMenuComponent,
    RemovePTagPipe,
    ApiPostDataComponent,
    OurMissionComponent,
    SupportServiceComponent,
    AboutAreaComponent,
    HomeServiceComponent,
    HomeTabComponent,
    MainBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
