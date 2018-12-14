import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'form-field-overview-example',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})

export class FacturasComponent implements OnInit {
  buscarCelda1=null;
  resultado=null;
  placa=null;
  cliente=null;
  verSeleccion: string = '';
  opcionSeleccionado: string  = '0';
  marca : string  = '';
  cars: Car[] = [
    {value: 'ford', viewValue: 'Ford'},
    {value: 'chevrolet', viewValue: 'Chevrolet'},
    {value: 'toyota', viewValue: 'Toyota'},
    {value: 'fiat', viewValue: 'Fiat'},
    {value: 'mercedes', viewValue: 'Mercedes'},
    {value: 'otros', viewValue: 'Otros'}
  ];
  
 
  facturar(valor1) {
    if (this.buscarCelda1)  {
      this.resultado = "10:00:05";
      alert("Cliente: "+this.cliente+"Placa: "+this.placa+" Marca: "+this.marca);
    }else{
      this.resultado = "10:00:05";
      alert("Cliente: "+this.cliente+"Placa: "+this.placa+" Marca: "+this.marca);
    }    
  }
  
    ngOnInit() {}
}