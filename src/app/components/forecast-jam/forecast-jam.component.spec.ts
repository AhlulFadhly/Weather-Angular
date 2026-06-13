import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastJamComponent } from './forecast-jam.component';

describe('ForecastJamComponent', () => {
  let component: ForecastJamComponent;
  let fixture: ComponentFixture<ForecastJamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastJamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
