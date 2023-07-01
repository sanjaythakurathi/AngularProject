import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    AppBarComponent,
    HomePageComponent,
    AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactUsComponent,
    HierarchyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
