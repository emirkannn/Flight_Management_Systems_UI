import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from './airport';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

private baseURL = "http://localhost:8080/airports";

  constructor(private httpClient: HttpClient) { }

  getAirportList(): Observable<Airport[]>{
    return this.httpClient.get<Airport[]>(`${this.baseURL}`);
  }
  createAirport(airport: Airport): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, airport);
  }
  getAirportById(id: number): Observable<Airport>{
    return this.httpClient.get<Airport>(`${this.baseURL}/${id}`);
  }
  updateAirport(id: number, airport: Airport): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,airport);
  }
  deleteAirport(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getDepartures(airportId: number): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}/${airportId}/departure-flights`);
  }

  getArrivals(airportId: number): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}/${airportId}/arrival-flights`);
  }

}