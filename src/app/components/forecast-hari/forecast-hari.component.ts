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
  
  getWeatherIcon(apiImage: string): string {
    if (!apiImage) {
      return 'assets/cuaca/default.png';
    }

    const fileName = apiImage
      .split('/')
      .pop()
      ?.replace('.svg', '.png')
      .replaceAll(' ', '-')
      .toLowerCase();

    return `assets/cuaca/${fileName}`;
  }

  generateForecast() {
  const days = this.weatherData.data[0].cuaca;

  this.forecastDays = days.map((day: any[], index: number) => {

    const avgTemp = Math.round(
      day.reduce((sum, item) => sum + item.t, 0) /
      day.length
    );

    const weatherCount = day.reduce(
      (acc: any, item) => {
        acc[item.weather_desc_en] =
          (acc[item.weather_desc_en] || 0) + 1;

        return acc;
      },
      {}
    );

    const dominantWeather =
      Object.keys(weatherCount).reduce(
        (a, b) =>
          weatherCount[a] > weatherCount[b]
            ? a
            : b
      );

    const icon =
      day.find(
        x => x.weather_desc_en === dominantWeather
      )?.image;

    // nama hari
    let displayDate = '';

    if (index === 0) {
      displayDate = 'Today';
    } else if (index === 1) {
      displayDate = 'Tomorrow';
    } else {
      displayDate = new Date(
        day[0].local_datetime
      ).toLocaleDateString(
        'en-US',
        {
          weekday: 'long'
        }
      );
    }

    return {
      date: displayDate,

      weather: dominantWeather,

      icon,

      temp: avgTemp,
    };
  });
}
}
