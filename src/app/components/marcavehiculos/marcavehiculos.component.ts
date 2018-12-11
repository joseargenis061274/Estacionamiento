
import {Component} from '@angular/core';

export interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-marcavehiculo',
  templateUrl: './marcavehiculos.component.html',
  styleUrls: ['./marcavehiculos.component.css']
})
export class MarcaVehiculos {
  selectedValue: string;
  selectedCar: string;
  cars: Car[] = [
    {value: 'Ford', viewValue: 'Ford'},
    {value: 'Chevrolet', viewValue: 'Chevrolet'},
    {value: 'Toyota', viewValue: 'Toyota'},
    {value: 'Fiat', viewValue: 'Fiat'},
    {value: 'Mercedes', viewValue: 'Mercedes'},
    {value: 'Otros', viewValue: 'Otros'}
  ];
}