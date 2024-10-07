import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {
  airports: Airport[] = [];

  constructor(private airportService: AirportService, private router: Router) {}

  ngOnInit(): void {
    this.getAirports();
  }

  // Havalimanı listesini getirir
  private getAirports(): void {
    this.airportService.getAirportList().subscribe(data => {
      this.airports = data.sort((a, b) => {
        // Ensure that both 'a.name' and 'b.name' are defined
        const nameA = a.name ?? '';  // Fallback to an empty string if undefined
        const nameB = b.name ?? '';  // Fallback to an empty string if undefined
        return nameA.localeCompare(nameB);
      });
    });
  }

  // İniş uçuşları için yönlendirme
  showArrivals(airportId: number): void {
    this.router.navigate(['flights', airportId, 'arrivals']);
  }

  // Kalkış uçuşları için yönlendirme
  showDepartures(airportId: number): void {
    this.router.navigate(['flights', airportId, 'departures']);
  }

  // Havalimanını güncellemek için yönlendirme
  updateAirport(id: number): void {
    this.router.navigate(['update-airport', id]);
  }

  // Havalimanını siler ve listeyi günceller
  deleteAirport(id: number): void {
    this.airportService.deleteAirport(id).subscribe(data => {
      console.log(data);
      this.getAirports();
    });
  }
  goToCreateAirport(): void {
    this.router.navigate(['/create-airport']);
  }
}
