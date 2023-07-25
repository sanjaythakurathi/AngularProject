// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../environments/environment'; // Import the environment

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiDataService {

//   private apiUrl = environment.apiUrl; // Use the apiUrl from environment
//   imageUrl = environment.imageUrl; // Use the imageUrl from environment

//   constructor(private http: HttpClient) { }

//   getAboutUsData(): Observable<any> {
//     const apiToken = environment.apiToken; // Use the apiToken from environment
//     const headers = { 'Authorization': `Bearer ${apiToken}` };
//     return this.http.get<any>(`${this.apiUrl}/aboutus`, { headers });
//   }

//   getOurTeamData(): Observable<any> {
//     const apiToken = environment.apiToken; // Use the apiToken from environment
//     const headers = { 'Authorization': `Bearer ${apiToken}` };
//     return this.http.get<any>(`${this.apiUrl}/ourteam`, { headers });
//   }

//   // Function to perform the POST request
//   postData(data: any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json; charset=UTF-8', // Adjust the content type as needed
//       }),
//     };

//     return this.http.post<any>(this.apiUrl, data, httpOptions);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Import the environment

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = environment.apiUrl;
  private _apiToken: string = environment.apiToken;
  imageUrl = environment.imageUrl;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this._apiToken}`
    });
  }

  getAboutUsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/aboutus`, { headers: this.getHeaders() });
  }

  getOurTeamData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ourteam`, { headers: this.getHeaders() });
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

