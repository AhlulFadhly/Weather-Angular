import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBackgroundComponent } from './weather-background.component';

describe('WeatherBackgroundComponent', () => {
  let component: WeatherBackgroundComponent;
  let fixture: ComponentFixture<WeatherBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
