import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AperturaComponent } from './components/apertura/apertura.component';
import { CobranzasComponent } from './components/cobranzas/cobranzas.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import {MaterialModule} from './material'
@NgModule({
  declarations: [
    AppComponent,
    AperturaComponent,
    CobranzasComponent,
    FacturasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
