import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightrouteComponent } from './flightroute.component';

describe('FlightrouteComponent', () => {
  let component: FlightrouteComponent;
  let fixture: ComponentFixture<FlightrouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightrouteComponent]
    });
    fixture = TestBed.createComponent(FlightrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
