import { Component, OnInit } from '@angular/core';
import { Airport } from '../../app/interfaces/airport';
import { AirportsListService } from '../airports-list/airports-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airport-detail',
  templateUrl: './airport-detail.component.html',
  styleUrls: ['./airport-detail.component.scss']
})
export class AirportDetailComponent implements OnInit {

  selectedAirport: Airport | undefined;

  constructor(
    private airportListService: AirportsListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params?.subscribe(params => {
      const airportKey = params['key'];
      
      this.airportListService.getAirport(airportKey)
        .then(airport => {
          this.selectedAirport = airport;
        })
        .catch(error => {
          console.error('Error fetching airport:', error);
        });
    });
  }

}