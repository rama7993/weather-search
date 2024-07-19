import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'weather';
  city: string = 'Greenland';
  dupCity = this.city;
  data?: WeatherData;
  checkCity: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.common(this.city);
    this.city = '';
  }

  onSubmit(form: NgForm) {
    this.common(this.city);
    this.dupCity = this.city;
    this.city = '';
  }

  private common(city: string): void {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        this.data = response;
        console.log(response);
      },
      error: (err) => {
        console.error(err);
        this.checkCity = true;
      },
      complete: () => {
        console.log('Weather data fetch complete.');
      },
    });
  }
}
