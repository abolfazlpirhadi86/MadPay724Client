import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-WeatherForecast',
  templateUrl: './WeatherForecast.component.html',
  styleUrls: ['./WeatherForecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    debugger;
    this.http.get('https://localhost:44353/weatherforecast').subscribe(
      (resp) => {
        this.values = resp;
      },
      (error) => {
        alert(error);
      },
    );
  }
}
