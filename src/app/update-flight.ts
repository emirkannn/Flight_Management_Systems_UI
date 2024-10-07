export class UpdateFlight {

    flightNumber: string = '';
    routeId: number = 0;  // Route ID için varsayılan değer
    departureAirportId: number = 0;  // Kalkış Havaalanı ID için varsayılan değer
    arrivalAirportId: number = 0;    // Varış Havaalanı ID için varsayılan değer
    price: number = 0;
    departureTime: Date = new Date();  // Kalkış saati için varsayılan değer
    arrivalTime: Date = new Date();    // Varış saati için varsayılan değer
    capacity: number = 0;
    status: string = 'ON_TIME'; 
}
