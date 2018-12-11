import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AperturaComponent } from './components/apertura/apertura.component';
import { CobranzasComponent } from './components/cobranzas/cobranzas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'apertura', component: AperturaComponent},
  {path: 'factura', component: FacturasComponent},
  {path: 'cobranzas', component: CobranzasComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
