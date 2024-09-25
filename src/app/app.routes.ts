import { Routes } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'flight'},
    {path:'flight',component:FlightDetailsComponent},
];
