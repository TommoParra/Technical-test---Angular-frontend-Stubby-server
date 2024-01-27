// airport-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Airport } from '../interfaces/airport';

@Component({
  selector: 'app-airport-card',
  templateUrl: './airport-card.component.html',
  styleUrls: ['./airport-card.component.scss']
})
export class AirportCardComponent {
  @Input() airport!: Airport;
  @Output() clickAirport: EventEmitter<string> = new EventEmitter<string>();

  onCardClick(): void {
    this.clickAirport.emit(this.airport.key);
  }
}