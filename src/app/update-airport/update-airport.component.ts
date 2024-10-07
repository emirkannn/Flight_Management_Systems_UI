import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';
import { Airport } from '../airport';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-airport',
  templateUrl: './update-airport.component.html',
  styleUrls: ['./update-airport.component.css']
})
export class UpdateAirportComponent implements OnInit {

  id!:number;

  airport : Airport = new Airport("","","","");
  constructor(private airportService : AirportService, private route : ActivatedRoute,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']


    this.airportService.getAirportById(this.id).subscribe(data =>{
      this.airport = data;
    }, error => console.log(error));
  }

  onSubmit(){
      this.airportService.updateAirport(this.id, this.airport).subscribe(data=>{
      this.goToAirportList();
      },
    error => console.log(error));
  }

  goToAirportList(){
    this.router.navigate(['/airports'])
  }
}
