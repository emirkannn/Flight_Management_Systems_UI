import { Airport } from './airport';

export class Route {
  id: number;
  source?: Airport;
  destination?: Airport;
  distanceInMiles?: number;

  constructor(
    id: number,
    source?: Airport,
    destination?: Airport,
    distanceInMiles?: number
  ) {
    this.id = id;
    this.source = source;
    this.destination = destination;
    this.distanceInMiles = distanceInMiles;
  }
}
