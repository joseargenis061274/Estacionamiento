import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.css']
})

export class CobranzasComponent implements OnInit {
    buscarCelda1=null;
    resultado=null;
    constructor() { 
  }
  
  cobrar(valor1) {
    if (this.buscarCelda1)  {
      this.resultado = "10:00:05";
      alert("celda1");
    }else{
      this.resultado = "10:00:05";
      alert("celda2");
    }    
  }
  ngOnInit() {}
 }