import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { RouteListComponent } from './route-list/route-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { AirportflightsComponent } from './airportflights/airportflights.component';
import { FlightrouteComponent } from './flightroute/flightroute.component';
import { CreateRouteComponent } from './create-route/create-route.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportListComponent,
    FlightListComponent,
    RouteListComponent,
    CreateAirportComponent,
    UpdateAirportComponent,
    CreateFlightComponent,
    UpdateFlightComponent,
    UpdateRouteComponent,
    AirportflightsComponent,
    FlightrouteComponent,
    CreateRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [CommonModule],
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
