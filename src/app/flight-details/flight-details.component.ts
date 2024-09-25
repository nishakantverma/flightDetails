import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.scss'
})
export class FlightDetailsComponent implements OnInit {
  url: string = '/assets/flight.json';
  http = inject(HttpClient);
  flightsData$!: Observable<Flight[]>;
  flightsData:Flight[] = [];

  ngOnInit(): void {
    this.flightsData$ = this.http.get(this.url).pipe( tap( (resp:any) => {
      this.flightsData = resp.data.flightOffers;
    }), map((res:any)=>res.data.flightOffers));
  }

 /**
  * this methd calulates the duration of flight from source to destination.
  * @param item flight object
  * @returns time taken for the flight to travel the from source to destination
  */
 calculateDuration(item:any) {
  const timeDiff = new Date(item.arrivalDate).getTime() - new Date(item.departureDate).getTime();
  return new Date(timeDiff).getHours() + ' hours ' + new Date(timeDiff).getMinutes() + ' mins';
 }

 /**
  * this method finds the connecting flight.
  * @param item flight object
  * @returns returns the connecting flights if any.
  */
  getConnectingFlights(item: any) {
    let connectingflight = '';
    if (item.connections) {
      item.connections.map((x: any) => {
        connectingflight = connectingflight + x.airportCode + ' > '
      });
    }
    return `${item?.originCode} > ${connectingflight}${item?.destinationCode}`
  }
}
