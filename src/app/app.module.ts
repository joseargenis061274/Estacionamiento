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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoverComponent } from './components/mover/mover.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ApiComponent } from './components/api/api.component';
import { ApiconclaveComponent } from './components/apiconclave/apiconclave.component';
import { ApiconautenticaComponent } from './components/apiconautentica/apiconautentica.component';



@NgModule({
  declarations: [
    AppComponent,
    AperturaComponent,
    CobranzasComponent,
    FacturasComponent,
    HomeComponent,
    MoverComponent,
    ReportesComponent,
    ApiComponent,
    ApiconclaveComponent,
    ApiconautenticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
