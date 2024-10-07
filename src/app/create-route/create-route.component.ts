import { Component, OnInit } from '@angular/core';
import { CreateRoute } from '../create-route';
import { Router } from '@angular/router';
import { AirportService } from '../airport.service';
import { RouteService } from '../route.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {

  createRouteDto: CreateRoute = new CreateRoute();
  airports: Airport[] = [];

  constructor( private router: Router, private airportService: AirportService,
    private routeService: RouteService // Changed to private
  ) {}

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports(): void {
    this.airportService.getAirportList().subscribe(data => {
        this.airports = data;
    }, error => {
        console.error('Error loading airports:', error);
    });
  }

  saveRoute(){
    this.routeService.createRoute(this.createRouteDto).subscribe(data =>{
      this.createRouteDto.destinationId = data.destination?.id ?? 0;
      this.createRouteDto.sourceId = data.source?.id ?? 0;
      this.createRouteDto.distanceInMiles = data.distanceInMiles ?? 0;
    }, error => {
      console.log('Creating route with:', this.createRouteDto);
      console.error('Error occurred:', error);
      console.log('Error details:', JSON.stringify(error));
    });
  }
  goToRouteList() {
    this.router.navigate(['/routes']);
  }

  onSubmit() {
    console.log(this.createRouteDto);
    this.saveRoute();
    this.goToRouteList();
  }
}
