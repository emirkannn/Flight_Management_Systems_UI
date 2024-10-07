import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportflightsComponent } from './airportflights.component';

describe('AirportflightsComponent', () => {
  let component: AirportflightsComponent;
  let fixture: ComponentFixture<AirportflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportflightsComponent]
    });
    fixture = TestBed.createComponent(AirportflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
