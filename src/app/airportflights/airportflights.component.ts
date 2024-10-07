import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airportflights',
  templateUrl: './airportflights.component.html',
  styleUrls: ['./airportflights.component.css']
})
export class AirportflightsComponent implements OnInit {

  flights: Flight[] = [];
  airportId: number = 0;
  type: string = '';  // "arrivals" veya "departures"

  constructor(private route: ActivatedRoute, private airportService: AirportService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.airportId = +params['airportId'];  // airportId'yi al
      this.type = params['type'];  // inişler mi kalkışlar mı
      this.loadFlights();
    });
  }
  private loadFlights(): void {
    if (this.type === 'arrivals') {
      this.airportService.getArrivals(this.airportId).subscribe(data => {
        this.flights = data;
      });
    } else if (this.type === 'departures') {
      this.airportService.getDepartures(this.airportId).subscribe(data => {
        this.flights = data;
      });
    }
  }
  goToAddFlight(): void {
    this.router.navigate(['/create-flight']);
  }

}
