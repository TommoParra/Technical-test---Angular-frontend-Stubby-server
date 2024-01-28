import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirportsListComponent} from '../pages/airports-list/airports-list.component';
import { AirportDetailComponent } from '../pages/airport-detail/airport-detail.component';
import { AuthGuard } from './guards/auth.guard';

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
    component: AirportDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
