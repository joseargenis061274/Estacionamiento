import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from '../post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-apertura',
  templateUrl: './apertura.component.html',
  styleUrls: ['./apertura.component.css']
})
export class AperturaComponent implements OnInit {
  newPost: Observable<any>;
  rutaInsertarCliente= 'https://app.alegra.com/api/v1/contacts';
  readonly ROOT_URL = this.rutaInsertarCliente;
  

  constructor(private http:HttpClient) { }
  
  aperturaCeldas(){
      /*Registrar solo las 20 celdas*/
      
      const dataAddCliente ={
        name: "Consultoría diseño de billeteras",
        price : 30
      }
        
      let headers = new HttpHeaders().set('authorization','Basic YXJnZW5pczA2MTI3NEBob3RtYWlsLmNvbTo2NjdkMmI4Y2UzMDFkOWYyZmJiMQ==');
      this.newPost = this.http.post(this.ROOT_URL, dataAddCliente, {headers : headers})
      
  }  

  ngOnInit() {
  }

}
