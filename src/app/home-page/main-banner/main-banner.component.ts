import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {
  title = 'ng-carousel-demo';
  imageUrl: string[] = [
    '../../../assets/images/slider/slider-5.jpg',
    '../../../assets/images/slider/slider-6.jpg'
  ];
  imageHeight: number = 500; // Initial height set to 300px

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: [
      "<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>",
    ],
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
