import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { Route } from '../route';

@Component({
  selector: 'app-flightroute',
  templateUrl: './flightroute.component.html',
  styleUrls: ['./flightroute.component.css']
})
export class FlightrouteComponent implements OnInit{

  flightroute : Route | null = null;
  flightId : number =0;

  constructor(private route: ActivatedRoute, private flightService: FlightService, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightId = +params['flightId'];  // airportId'yi al
      this.loadRoutes();
    });
  }

  private loadRoutes():void{
    this.flightService.getFlightRoute(this.flightId).subscribe(data =>{
      this.flightroute = data;
    })
  }

  goToRoute(): void {
    this.router.navigate([`/flights/${this.flightId}/route`]);
  }
}
