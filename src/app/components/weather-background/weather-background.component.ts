import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-background.component.html',
  styleUrl: './weather-background.component.scss',
})
export class WeatherBackgroundComponent implements OnInit, OnDestroy {
  @Input()
  selectedWeather: any;

  isFlashing = false;
  showBolt = false;
  lightningLeft = 50;

  drops = Array.from({ length: 200 }, () => ({
    left: Math.random() * 100,
    delay: Math.random(),
  }));

  private intervalId?: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      if (this.weatherType !== 'thunder') {
        return;
      }

      if (Math.random() > 0.7) {
        this.triggerLightning();
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private triggerLightning(): void {
    this.lightningLeft = Math.random() * 80 + 10;

    this.showBolt = true;
    this.isFlashing = true;

    setTimeout(() => {
      this.showBolt = false;
      this.isFlashing = false;
    }, 250);
  }

  get isNight(): boolean {
    if (!this.selectedWeather?.image) {
      return false;
    }

    return this.selectedWeather.image.toLowerCase().includes('-pm.svg');
  }

  get weatherType(): string {
    const code = this.selectedWeather?.weather;

    if ([0, 1].includes(code)) {
      return 'clear';
    }

    if ([2].includes(code)) {
      return 'partly-cloudy';
    }

    if ([3].includes(code)) {
      return 'cloudy';
    }

    if ([45].includes(code)) {
      return 'fog';
    }

    if ([60, 61, 63, 80].includes(code)) {
      return 'rain';
    }

    if ([95, 97].includes(code)) {
      return 'thunder';
    }

    return 'cloudy';
  }

  get backgroundClass(): string {
    return `${this.weatherType}-${this.isNight ? 'night' : 'day'}`;
  }
}
