import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css']
})
export class CreateAirportComponent implements OnInit{

  airport : Airport = new Airport("","","","");
  constructor(private airportService: AirportService, private router: Router){}

  ngOnInit(): void {}

  saveAirport(){
    this.airportService.createAirport(this.airport).subscribe(data =>{
      console.log(data);
      this.goToAirportList();
    },
    error => console.log(error));
    
  }
  goToAirportList(){
    this.router.navigate(['/airports'])
  }

  onSubmit(){
    console.log(this.airport);
    this.saveAirport();
  }
}
