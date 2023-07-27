import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'; // Adjust the path accordingly

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioData: any[] = [];
  imageUrl: any 
  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.imageUrl=this.apiDataService.imageUrl
    this.loadportfolioData();
  }

  loadportfolioData() {
    this.apiDataService.getportfolioData().subscribe(
      (data) => {
        this.portfolioData = data.data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
