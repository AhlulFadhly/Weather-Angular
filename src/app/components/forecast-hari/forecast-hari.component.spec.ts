import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHariComponent } from './forecast-hari.component';

describe('ForecastHariComponent', () => {
  let component: ForecastHariComponent;
  let fixture: ComponentFixture<ForecastHariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastHariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastHariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
