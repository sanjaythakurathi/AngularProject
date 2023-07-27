import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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
