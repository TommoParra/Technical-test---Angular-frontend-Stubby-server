import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Airport} from './airport';

@Injectable({providedIn: 'root'})
export class AirportsListService {

    private headers = new HttpHeaders({
        'securityKey': 'some-key'
      });

    constructor(private http: HttpClient) {
    }

    public getAllAirports(): Promise<Airport[]> {
        const url = 'http://localhost:1500/allAirports';
        return this.http.get<Airport[]>(url, {headers: this.headers}).toPromise();
    }

    public getAirport(airportKey: string): Promise<Airport> {
        const url = 'http://localhost:1500/airport';
        return this.http.post<Airport>(url, {key: airportKey}).toPromise();
    }

}
