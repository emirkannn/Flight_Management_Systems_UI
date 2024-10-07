import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = []; // Başlangıçta boş bir dizi
  selectedFlightIndex: number = -1; // Başlangıçta -1, seçili uçuş yok
  loadingRoute: boolean = false; // Rota yüklenirken bekleme durumu

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.getFlights();
  }

  private getFlights(): void {
    this.flightService.getFlightList().subscribe(data => {
      this.flights = data;
      this.sortFlights(); // Uçuşları sıralama işlemi
    });
  }

  private sortFlights(): void {
    this.flights.sort((a, b) => a.flightNumber!.localeCompare(b.flightNumber!));
  }

  updateFlight(id: number): void {
    this.router.navigate(['update-flight', id]);
  }

  goToCreateFlight(): void {
    this.router.navigate(['/create-flight']);
  }

  goToRoute(flightId: number): void {
    this.router.navigate([`/flights/${flightId}/route`]);
  }
  deleteFlight(id: number): void {
    this.flightService.deleteFlight(id).subscribe(data => {
      console.log(data);
      this.getFlights();
    });
  }
}
