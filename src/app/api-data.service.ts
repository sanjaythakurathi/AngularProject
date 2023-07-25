import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private apiUrl = 'http://192.168.1.241/pioneer/public/api/v1'; // Replace this with the actual API URL
  imageUrl = 'http://192.168.1.241/pioneer/public/assets/images'; // Replace this with the actual API URL
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) { }

  getAboutUsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/aboutus`);
  }

  getOurTeamData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ourteam`);
  }

  // Function to perform the POST request
  postData(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8', // Adjust the content type as needed
      }),
    };

    return this.http.post<any>(this.apiUrl, data, httpOptions);
  }
}

