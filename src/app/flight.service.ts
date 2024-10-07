import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { Route } from './route';
import { CreateFlight } from './create-flight';
import { FlightStatusEnum } from './flight-status-enum.enum';
import { UpdateFlight } from './update-flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

private baseURL = "http://localhost:8080/flights";

  constructor(private httpClient: HttpClient) { }

  getFlightList(): Observable<Flight[]>{
    return this.httpClient.get<Flight[]>(`${this.baseURL}`);
}

getFlightRoute(flightId: number): Observable<Route> {
  return this.httpClient.get<Route>(`${this.baseURL}/${flightId}/route`);
}
createFlight(createflightdto : CreateFlight): Observable<Flight>{
      const flight = {
      flightNumber: createflightdto.flightNumber,
      routeId: createflightdto.routeId, // Sadece id olarak verildi
      departureAirportId: createflightdto.departureAirportId, // Sadece id olarak verildi
      arrivalAirportId: createflightdto.arrivalAirportId, // Sadece id olarak verildi
      price: createflightdto.price,
      departureTime: createflightdto.departureTime,
      arrivalTime: createflightdto.arrivalTime,
      capacity: createflightdto.capacity,
      status: FlightStatusEnum.SCHEDULED
    };
  return this.httpClient.post<Flight>(`${this.baseURL}`,flight)
}
getFlightById(id: number) : Observable<Flight>{
  return this.httpClient.get<Flight>(`${this.baseURL}/${id}`);
}
updateFlight(id:number,updateFlight: UpdateFlight):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,updateFlight);
}

deleteFlight(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}