import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apertura',
  templateUrl: './apertura.component.html',
  styleUrls: ['./apertura.component.css']
})

export class AperturaComponent implements OnInit {
  /* Declaraciones de variables */
  newPost: Observable<any>;
  readonly ROOT_URL = 'https://app.alegra.com/api/v1/items/?start=0';
  posts: Observable<any>;
  cantCelExi:number = 0;
  cantCelAdd:number = 0;
  x:number;
  nombreCliente : string;

  constructor(private http:HttpClient) { 
    /*Buscar la cantidad de celdas disponibles*/
    let headers = new HttpHeaders().set('authorization','Basic YXJnZW5pczA2MTI3NEBob3RtYWlsLmNvbTo2NjdkMmI4Y2UzMDFkOWYyZmJiMQ==');
    this.posts = this.http.get(this.ROOT_URL + '/posts', {headers})
    .subscribe(
      (data:any[]) => {
        if(data.length > 0 && data.length <= 20){
          //calcular diferencia de los puestos a crear
          this.cantCelAdd = 20 - data.length;        
          this.cantCelExi = data.length;
        }
      }
    )

   }
  
   setCeldas(){
      /*Registrar solo las 20 celdas*/
      for (this.x=1; this.x<=this.cantCelAdd; this.x++) { 
        //sentencias a ejecutar en cada iteración 
        this.cantCelExi++
        const dataAddCliente = {name: "Estacionamiento Celda: ("+this.cantCelExi+")" , price : 30}
        let headers = new HttpHeaders().set('authorization','Basic YXJnZW5pczA2MTI3NEBob3RtYWlsLmNvbTo2NjdkMmI4Y2UzMDFkOWYyZmJiMQ==');
        this.newPost = this.http.post("https://app.alegra.com/api/v1/items", dataAddCliente, {headers : headers})
        .subscribe((data:any) =>{}
        )
      }
  }  
  ngOnInit() {  }
}
