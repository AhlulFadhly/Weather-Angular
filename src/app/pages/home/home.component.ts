import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { DetailCuacaComponent } from "../../components/detail-cuaca/detail-cuaca.component";
import { ForecastJamComponent } from "../../components/forecast-jam/forecast-jam.component";
import { ForecastHariComponent } from "../../components/forecast-hari/forecast-hari.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, DetailCuacaComponent, ForecastJamComponent, ForecastHariComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
