import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {environment} from '../environments/envi'; // Import the environment

type OurTeamResponse= {
  data: {
    id:string;
    title:string;
    category:string;
    position:string;
    facebook:string;
    youtube:string;
    linkedin:string;
    image:string;
    //[key:string ]:string
  }[];
}

type AboutUsResponse= {
  data: {
  id:string;
  title:string;
  introduction:string;
  image:string;
  mission:string;
  vision:string;
  objective:string;
  core_values:string;
  }[];
}

type portfolioResponse= {
  data: {
    id: string;
    url: string;
    image: string;
    site_name:string;
  }[];
}


type serviceResponse= {
  data: {
    id: string;
    title: string;
    description: string;
    icon_name: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  private apiUrl =''
  private _apiToken: string = ''
  imageUrl = ''

  constructor(private http: HttpClient) {
    this._apiToken = environment.apiToken
    this.apiUrl = environment.apiUrl
    this.imageUrl = environment.imageUrl
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this._apiToken}`
    });
  }

  getAboutUsData(): Observable<AboutUsResponse> {
    return this.http.get<AboutUsResponse>(`${this.apiUrl}/aboutus`, { headers: this.getHeaders() });
  }

  getOurTeamData(): Observable<OurTeamResponse> {
    return this.http.get<OurTeamResponse>(`${this.apiUrl}/ourteam`, { headers: this.getHeaders() });
  }

  getportfolioData(): Observable<portfolioResponse> {
    return this.http.get<portfolioResponse>(`${this.apiUrl}/portfolio`, { headers: this.getHeaders() });
  }

  getserviceData(): Observable<serviceResponse> {
    return this.http.get<serviceResponse>(`${this.apiUrl}/ourservice`, { headers: this.getHeaders() });
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

