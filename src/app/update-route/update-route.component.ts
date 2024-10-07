import { Component, OnInit } from '@angular/core';
import { UpdateRoute } from '../update-route';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../route.service';
import { Route } from '../route';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit {

  routes: Route[] = [];
  airports: Airport[] = [];
  id!: number;
  updateRoute: UpdateRoute = new UpdateRoute();

  constructor(
    private route: ActivatedRoute,
    private routeService: RouteService,
    private router: Router,
    private airportService: AirportService // Inject AirportService correctly
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRoute(); // Fetch route details on initialization
    this.loadAirports(); // Load available airports on initialization
  }

  // Fetch the route details by its ID and populate the form
  getRoute(): void {
    this.routeService.getRouteById(this.id).subscribe(data => {
      this.updateRoute.sourceAirportId = data.source?.id ?? 1;
      this.updateRoute.destinationAirportId = data.destination?.id ?? 1;
      this.updateRoute.distanceInMiles = data.distanceInMiles ?? 0;
    },
    error => console.log(error));
  }

  // Load list of airports
  loadAirports(): void {
    this.airportService.getAirportList().subscribe(data => {
        this.airports = data;
    }, error => {
      console.log('Updating route with:', this.updateRoute);
        console.error('Error loading airports:', error);
    });
  }

  // Submit the updated route data to the server
  onSubmit(): void {
    this.routeService.updateRoute(this.id, this.updateRoute).subscribe(data => {
      this.goToRouteList();
    },
    error => console.log(error));
  }

  // Navigate back to the route list page after successful update
  goToRouteList(): void {
    this.router.navigate(['/routes']);
  }

}
