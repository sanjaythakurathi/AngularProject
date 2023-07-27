import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'; // Adjust the path accordingly

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any[] = [];
  imageUrl: any

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.imageUrl=this.apiDataService.imageUrl
    this.loadAboutUsData();
  }

  loadAboutUsData() {
    this.apiDataService.getAboutUsData().subscribe(
      (data) => {
        this.aboutUsData = data.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
