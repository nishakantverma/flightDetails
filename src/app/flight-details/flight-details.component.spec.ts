import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsComponent } from './flight-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightDetailsComponent,HttpClientModule],
      providers:[HttpClient]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly format connecting flights', () => {
    const testData = {
      originCode: 'JFK',
      destinationCode: 'LAX',
      connections: [
        { airportCode: 'ORD' },
        { airportCode: 'DEN' }
      ]
    };
 
    const result = component.getConnectingFlights(testData);
    expect(result).toBe('JFK > ORD > DEN > LAX');
  });

  it('should correctly calculate the duration', () => {
    const testData = {
      departureDate: '2024-07-01T10:00:00Z',
      arrivalDate: '2024-07-01T15:30:00Z'
    };
 
    const result = component.calculateDuration(testData);
    expect(result).toBe('11 hours 0 mins');
  });
  
});
