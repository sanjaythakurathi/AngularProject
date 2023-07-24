import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';
 
@Component({
  selector: 'app-api-post-data',
  templateUrl: './api-post-data.component.html',
  styleUrls: ['./api-post-data.component.css'],
})
export class ApiPostDataComponent {
  dataToSend ={
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  responseData: any;
  constructor(private apiService: ApiDataService) { }

  onSubmit() {
    this.apiService.postData(this.dataToSend).subscribe(
      (response) => {
        
        this.responseData = response; // Assign the response to the responseData property
        console.log('Response:', this.responseData); // Display the response in the console
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
