import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'; // Adjust the path accordingly

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  ourTeamData: any[] = [];
  imageUrl: any 
  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.imageUrl=this.apiDataService.imageUrl
    this.loadOurTeamData();
  }

  loadOurTeamData() {
    this.apiDataService.getOurTeamData().subscribe(
      (data) => {
        // console.log(data.ourteam[0].)
        this.ourTeamData = data.data;
        console.log('Our Team Data:', this.ourTeamData);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
