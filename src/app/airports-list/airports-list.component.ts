import { Component, OnInit } from '@angular/core';
import { AirportsListService } from './airports-list.service';
import { Airport } from '../interfaces/airport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit {
  public airportsList?: Airport[];
  public error?: string;

  constructor(private airportsListService: AirportsListService, private router: Router) {}

  public ngOnInit(): void {
    const securityKey = localStorage.getItem('securityKey');

    if (!securityKey) {
      this.error = 'To see the airport list, please login.';
      return;
    }

    this.airportsListService.getAllAirports().then((res) => {
      this.airportsList = res;
    }).catch((error) => {
      this.error = error.message;
    });
  }

  public async clickAirport(key: string): Promise<void> {
    const airport = await this.airportsListService.getAirport(key);
    console.log('Navigating to airport:', airport);
    this.router.navigate(['/airport', key]);
  }
}