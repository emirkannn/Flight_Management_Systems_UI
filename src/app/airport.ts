import { Flight } from './flight'; // Flight sınıfını import ediyoruz.

export class Airport {
  id?: number; // Opsiyonel hale getirdik, eğer her zaman verilmesi gerekmiyorsa
  name?: string;
  code?: string;
  country?: string;
  city?: string;
  departureFlights?: Flight[] = []; // Varsayılan olarak boş bir dizi
  arrivalFlights?: Flight[] = [];   // Varsayılan olarak boş bir dizi

  constructor(
    name?: string,
    code?: string,
    country?: string,
    city?: string,
    id?: number, // Opsiyonel parametre en sona taşındı
    departureFlights: Flight[] = [],
    arrivalFlights: Flight[] = []
  ) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.country = country;
    this.city = city;
    this.departureFlights = departureFlights;
    this.arrivalFlights = arrivalFlights;
  }
}
