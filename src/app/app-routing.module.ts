import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AperturaComponent } from './components/apertura/apertura.component';
import { CobranzasComponent } from './components/cobranzas/cobranzas.component';
import { MoverComponent } from './components/mover/mover.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ApiComponent } from './components/api/api.component'
import {ApiconclaveComponent} from './components/apiconclave/apiconclave.component'
import {ApiconautenticaComponent} from './components/apiconautentica/apiconautentica.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'apertura', component: AperturaComponent},
  {path: 'factura', component: FacturasComponent},
  {path: 'cobranzas', component: CobranzasComponent},
  {path: 'mover', component: MoverComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'api', component: ApiComponent},
  {path: 'apiconclave', component: ApiconclaveComponent},
  {path: 'apiconautentica', component: ApiconautenticaComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
