import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-WeatherForecast',
  templateUrl: './WeatherForecast.component.html',
  styleUrls: ['./WeatherForecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {

  values: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http
      .get<any[]>('https://localhost:44353/weatherforecast')
      .subscribe({
        next: (resp) => {
          console.log('API RESPONSE:', resp);
          this.values = resp;
        },

        error: (error) => {
          console.log('STATUS:', error.status);
          console.log('MESSAGE:', error.message);
          console.log('ERROR:', error.error);
          console.log('FULL ERROR:', error);

          alert(
            'Status: ' + error.status +
            '\nMessage: ' + error.message
          );
        }
      });
  }
}