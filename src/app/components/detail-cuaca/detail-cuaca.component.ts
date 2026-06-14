import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-detail-cuaca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cuaca.component.html',
  styleUrl: './detail-cuaca.component.scss',
})
export class DetailCuacaComponent {
  @Input()
  selectedWeather: any;

  @Input()
  weatherData: any;
}
