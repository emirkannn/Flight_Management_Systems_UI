import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportListComponent } from './airport-list/airport-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { RouteListComponent } from './route-list/route-list.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { AirportflightsComponent } from './airportflights/airportflights.component';
import { FlightrouteComponent } from './flightroute/flightroute.component';
import { CreateRouteComponent } from './create-route/create-route.component';

const routes: Routes = [
  {path: 'airports', component: AirportListComponent},
  {path: 'create-airport', component: CreateAirportComponent},
  {path: 'update-airport/:id', component: UpdateAirportComponent},
  {path: '', redirectTo: 'airports', pathMatch: 'full'},
  {path:'flights', component: FlightListComponent},
  {path: 'create-flight', component: CreateFlightComponent},
  {path: 'update-flight/:id', component: UpdateFlightComponent},
  {path:'routes', component:RouteListComponent},
  {path:'create-route', component:CreateRouteComponent},
  {path:'update-route/:id',component:UpdateRouteComponent},
  {path:'flights/:flightId/route', component: FlightrouteComponent},
  {path: 'flights/:airportId/:type', component: AirportflightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
