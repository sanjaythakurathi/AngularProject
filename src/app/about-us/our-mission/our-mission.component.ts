import { Component } from '@angular/core';
import { ApiDataService } from '../../api-data.service'; // Adjust the path accordingly

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.css']
})
export class OurMissionComponent {

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
