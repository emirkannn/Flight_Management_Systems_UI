import { Airport } from './airport';
import { Route } from './route';
import { FlightStatusEnum } from './flight-status-enum.enum';

export class Flight {
  id: number | null;
  flightNumber: string | null;
  route?: Route | null;
  departureAirport?: Airport | null;
  arrivalAirport?: Airport | null;
  price: number | null;
  departureTime: Date | null;
  arrivalTime: Date | null;
  capacity: number | null;
  status: FlightStatusEnum | null;

  constructor(
    id: number | null = null,
    flightNumber: string | null = null,
    route: Route | null = null,
    departureAirport: Airport | null = null,
    arrivalAirport: Airport | null = null,
    price: number | null = null,
    departureTime: Date | null = null,
    arrivalTime: Date | null = null,
    capacity: number | null = null,
    status: FlightStatusEnum | null = FlightStatusEnum.SCHEDULED
  ) {
    this.id = id;
    this.flightNumber = flightNumber;
    this.route = route;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.price = price;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.capacity = capacity;
    this.status = status;
  }
}
