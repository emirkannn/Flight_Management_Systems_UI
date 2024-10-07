import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from './route';
import { Observable } from 'rxjs';
import { UpdateRoute } from './update-route';
import { CreateRoute } from './create-route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private baseURL = "http://localhost:8080/routes";

  constructor(private httpClient: HttpClient) { }

  getRouteList(): Observable<Route[]>{
    return this.httpClient.get<Route[]>(`${this.baseURL}`);
  }
  getRouteById(id: number) : Observable<Route>{
    return this.httpClient.get<Route>(`${this.baseURL}/${id}`);
  }
  updateRoute(id:number,updateRoute: UpdateRoute):Observable<Object>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(`${this.baseURL}/${id}`,updateRoute,{ headers: headers });
  }
  createRoute(createRouteDto : CreateRoute):Observable<Route>{
    const route ={
      destinationAirportId:createRouteDto.destinationId,
      sourceAirportId: createRouteDto.sourceId,
      distanceInMiles: createRouteDto.distanceInMiles
    };
    return this.httpClient.post<Route>(`${this.baseURL}`,route)
}
deleteRoute(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
