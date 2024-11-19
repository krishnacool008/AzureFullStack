import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html'
})
export class CallAPIComponent implements OnInit {

  response: any = null; // To store the API response
  tokenExpiration: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8082/api/date')
      .subscribe({
        next: (response) => {
          this.response = response;
        },
        error: (error) => {
          console.error('Error fetching profile:', error);
        }
      });

    this.tokenExpiration = localStorage.getItem('tokenExpiration');
  }
}

