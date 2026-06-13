import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCuacaComponent } from './detail-cuaca.component';

describe('DetailCuacaComponent', () => {
  let component: DetailCuacaComponent;
  let fixture: ComponentFixture<DetailCuacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCuacaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCuacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
