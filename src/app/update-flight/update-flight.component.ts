import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { UpdateFlight } from '../update-flight';
import { Route } from '../route';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  routes: Route[] = [];
  airports: Airport[] = [];
  id!: number;
  updateFlightdto: UpdateFlight = new UpdateFlight();
  constructor(private  route: ActivatedRoute, private flightService: FlightService , private router: Router,
    private airportService: AirportService, 
    private routeService: RouteService,
  ) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadFlightDetails();
    this.loadRoutes();
    this.loadAirports();
}

loadFlightDetails(): void {
  this.flightService.getFlightById(this.id).subscribe(data => {
    this.updateFlightdto.flightNumber = data.flightNumber ?? ''; // Null ise boş string atanacak
    this.updateFlightdto.routeId = data.route?.id ?? 0; // Null ise 0 atanacak
    this.updateFlightdto.departureAirportId = data.departureAirport?.id ?? 0; // Null ise 0 atanacak
    this.updateFlightdto.arrivalAirportId = data.arrivalAirport?.id ?? 0; // Null ise 0 atanacak
    this.updateFlightdto.price = data.price ?? 0; // Null ise 0 atanacak
    this.updateFlightdto.departureTime = data.departureTime ?? new Date(); // Null ise mevcut tarih atanacak
    this.updateFlightdto.arrivalTime = data.arrivalTime ?? new Date(); // Null ise mevcut tarih atanacak
    this.updateFlightdto.capacity = data.capacity ?? 0; // Null ise 0 atanacak
    this.updateFlightdto.status = data.status ?? 'SCHEDULED'; // Null ise varsayılan 'SCHEDULED' atanacak
  },
  error => console.log(error));
}

  onSubmit(){
    this.flightService.updateFlight(this.id,this.updateFlightdto).subscribe(data =>{
      this.goToFlightList();
    },
  error => console.log(error));
  }

  goToFlightList(){
    this.router.navigate(['/flights'])
  }

  loadAirports(): void {
    this.airportService.getAirportList().subscribe(data => {
        this.airports = data;
    }, error => {
        console.error('Error loading airports:', error);
    });
  }

  loadRoutes(): void{
    this.routeService.getRouteList().subscribe(data => {
      this.routes = data;
  },
  error => console.log(error));
}
}
