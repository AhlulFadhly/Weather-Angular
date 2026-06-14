import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { DetailCuacaComponent } from '../../components/detail-cuaca/detail-cuaca.component';
import { ForecastJamComponent } from '../../components/forecast-jam/forecast-jam.component';
import { ForecastHariComponent } from '../../components/forecast-hari/forecast-hari.component';
import { ConfigService } from '../../services/config.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgxParticlesModule } from '@tsparticles/angular';
import { WeatherBackgroundComponent } from "../../components/weather-background/weather-background.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    DetailCuacaComponent,
    ForecastJamComponent,
    ForecastHariComponent,
    CommonModule,
    NgxParticlesModule,
    WeatherBackgroundComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  weatherData: any;
  allWeather: any[] = [];
  selectedWeather: any;

  private adm4Subscription?: Subscription;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.adm4Subscription = this.configService.adm4$.subscribe((adm4) => {
      console.log('ADM4 diterima:', adm4);

      this.loadWeather(adm4);
    });
  }

  loadWeather(adm4: string): void {
    this.configService.getWeather(adm4).subscribe({
      next: (res) => {
        this.weatherData = res;
        this.allWeather = res.data[0].cuaca.flat();
        this.selectedWeather = res.data[0].cuaca[0][0];
      },

      error: (err) => {
        console.error('Gagal mengambil data cuaca:', err);
      },
    });
  }

  selectWeather(weather: any) {
    this.selectedWeather = weather;
  }

  ngOnDestroy(): void {
    this.adm4Subscription?.unsubscribe();
  }
}
