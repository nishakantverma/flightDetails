export interface Flight {
    airline: string;
    arrivalDate: number;
    connections: connections[];
    departureDate: number;
    destinationCode: string;
    destinationLabel: string;
    flightClass: string;
    flightDuration: number;
    flightNumber: string;
    id: string;
    lowestPrice: lowestPrice;
    originCode: string;
    originLabel: string
}

export interface lowestPrice {
    amount: number;
    currency: string
  };
  export interface connections {
    airportCode: string;
    airportLabel: string;
    time:number;
  };