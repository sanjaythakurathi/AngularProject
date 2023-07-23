import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';
 
@Component({
  selector: 'app-api-post-data',
  templateUrl: './api-post-data.component.html',
  styleUrls: ['./api-post-data.component.css'],
})
export class ApiPostDataComponent {
  dataToSend = {
    // Your data here, based on the provided example
    "posts": [
      {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": 2
      },
      //... Add other posts here
    ],
    "total": 150,
    "skip": 0,
    "limit": 30
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
