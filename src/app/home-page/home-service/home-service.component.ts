import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../api-data.service'; // Adjust the path accordingly

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {

  serviceData: any[] = [];

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.loadserviceData();
  }

  loadserviceData() {
    this.apiDataService.getserviceData().subscribe(
      (data) => {
        this.serviceData = data.data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
