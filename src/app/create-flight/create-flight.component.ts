import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { CreateFlight } from '../create-flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';
import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  routes: Route[] = [];
  airports: Airport[] = [];
  createflightdto: CreateFlight = new CreateFlight();

  // Add private for RouteService
  constructor(private flightService: FlightService, private router: Router, private airportService: AirportService,
    private routeService: RouteService // Changed to private
  ) {}

  ngOnInit(): void {
    this.loadRoutes();
    this.loadAirports();
  }

  loadAirports(): void {
    this.airportService.getAirportList().subscribe(data => {
        this.airports = data;
    }, error => {
        console.error('Error loading airports:', error);
    });
  }

  loadRoutes(): void {
    this.routeService.getRouteList().subscribe(data => { // Changed routeservice to routeService
      this.routes = data;
    }, error => {
      console.error('Error loading routes:', error);
    });
  }

  saveFlight() {
    this.flightService.createFlight(this.createflightdto).subscribe(data => {
      this.createflightdto.flightNumber = data.flightNumber ?? ''; // Eğer null ise boş string atanacak
      this.createflightdto.routeId = data.route?.id ?? 0; // Eğer route veya id null ise 0 atanacak
      this.createflightdto.departureAirportId = data.departureAirport?.id ?? 0; // Eğer departureAirport veya id null ise 0 atanacak
      this.createflightdto.arrivalAirportId = data.arrivalAirport?.id ?? 0; // Eğer arrivalAirport veya id null ise 0 atanacak
      this.createflightdto.price = data.price ?? 0; // Eğer price null ise 0 atanacak
      this.createflightdto.departureTime = data.departureTime ?? new Date(); // Eğer departureTime null ise mevcut tarih atanacak
      this.createflightdto.arrivalTime = data.arrivalTime ?? new Date(); // Eğer arrivalTime null ise mevcut tarih atanacak
      this.createflightdto.capacity = data.capacity ?? 0; // Eğer capacity null ise 0 atanacak
      this.createflightdto.status = data.status ?? 'SCHEDULED'; // Eğer status null ise varsayılan 'SCHEDULED' atanacak
    }, error => {
      console.log('Creating route with:', this.createflightdto);
      console.error('Error occurred:', error);
      console.log('Error details:', JSON.stringify(error));
    });
  }

  goToFlightList() {
    this.router.navigate(['/flights']);
  }

  onSubmit() {
    console.log(this.createflightdto);
    this.saveFlight();
    this.goToFlightList();
  }
}
