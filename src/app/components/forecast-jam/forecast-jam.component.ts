import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-jam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-jam.component.html',
  styleUrl: './forecast-jam.component.scss',
})
export class ForecastJamComponent {
  @Input()
  allWeather: any[] = [];
  
  @Input()
  selectedWeather: any;

  @Output()
  weatherSelected = new EventEmitter();

  select(item: any) {
    this.weatherSelected.emit(item);
  }

  isActive(item: any): boolean {
    return this.selectedWeather?.local_datetime === item?.local_datetime;
  }


  //ganti icon
  getWeatherIcon(
  apiImage: string
): string {

  if (!apiImage) {
    return 'assets/cuaca/default.png';
  }

  const fileName =
    apiImage
      .split('/')
      .pop()
      ?.replace('.svg', '.png')
      .replaceAll(' ', '-')
      .toLowerCase();

  return `assets/cuaca/${fileName}`;
}
}
