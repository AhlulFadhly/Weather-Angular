import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-hari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-hari.component.html',
  styleUrl: './forecast-hari.component.scss',
})
export class ForecastHariComponent implements OnChanges {
  @Input()
  weatherData: any;
  forecastDays: any[] = [];

  ngOnChanges() {
    if (this.weatherData) {
      this.generateForecast();
    }
  }

  generateForecast() {
    const days = this.weatherData.data[0].cuaca;

    this.forecastDays = days.map((day: any[]) => {
      const temps = day.map((x) => x.t);

      const rain = day.map((x) => x.tp);

      const wind = day.map((x) => x.ws);

      const humidity = day.map((x) => x.hu);

      // hitung cuaca dominan
      const count: any = {};

      day.forEach((item) => {
        count[item.weather_desc] = (count[item.weather_desc] || 0) + 1;
      });

      const dominant = Object.keys(count).reduce((a, b) =>
        count[a] > count[b] ? a : b,
      );

      const icon = day.find((x) => x.weather_desc === dominant)?.image;

      return {
        date: day[0].local_datetime,

        weather: dominant,

        icon,

        tempMin: Math.min(...temps),

        tempMax: Math.max(...temps),

        rainMin: Math.min(...rain),

        rainMax: Math.max(...rain),

        windMin: Math.floor(Math.min(...wind)),

        windMax: Math.ceil(Math.max(...wind)),

        humidityMin: Math.min(...humidity),

        humidityMax: Math.max(...humidity),
      };
    });
  }
}
