import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {AirportsListComponent} from '../pages/airports-list/airports-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AirportCardComponent } from './components/airport-card/airport-card.component';
import { HeaderComponent } from './components/header/header.component';
import { AirportDetailComponent } from '../pages/airport-detail/airport-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        AirportsListComponent,
        AirportCardComponent,
        HeaderComponent,
        AirportDetailComponent,
        LoginComponent,
        FooterComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
          },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
