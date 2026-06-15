import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import * as SunCalc from 'suncalc';

@Component({
  selector: 'app-detail-cuaca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cuaca.component.html',
  styleUrl: './detail-cuaca.component.scss',
})
export class DetailCuacaComponent implements OnChanges {
  @Input() selectedWeather: any;
  @Input() weatherData: any;

  sunrise!: Date;
  sunset!: Date;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weatherData'] && this.weatherData?.lokasi) {
      this.getSunTimes();
    }
  }

  getSunTimes() {
    const lat = this.weatherData.lokasi.lat;
    const lon = this.weatherData.lokasi.lon;

    const times = SunCalc.getTimes(new Date(), lat, lon);

    this.sunrise = times.sunrise;
    this.sunset = times.sunset;

    console.log(this.sunrise);
    console.log(this.sunset);
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
}
