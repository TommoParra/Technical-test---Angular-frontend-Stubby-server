import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirportsListComponent} from './airports-list/airports-list.component';
import { AirportDetailComponent } from './airport-detail/airport-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/airportsList',
    pathMatch: 'full'
  },
  {
    path: 'airportsList',
    component: AirportsListComponent
  },
  {
    path: 'airport/:key',
    component: AirportDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
