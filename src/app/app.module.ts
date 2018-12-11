import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AperturaComponent } from './components/apertura/apertura.component';
import { CobranzasComponent } from './components/cobranzas/cobranzas.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import {MaterialModule} from './material';
import { MarcaVehiculos } from './components/marcavehiculos/marcavehiculos.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AperturaComponent,
    CobranzasComponent,
    FacturasComponent,
    HomeComponent,
    MarcaVehiculos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
