import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './apiconautentica.component.html',
  styleUrls: ['./apiconautentica.component.css']
})
export class ApiconautenticaComponent implements OnInit {
  
  rutaConsulta = 'https://app.alegra.com/api/v1/contacts/:id=1';
  rutaInsertarCliente= 'https://app.alegra.com/api/v1/contacts';
  readonly ROOT_URL = this.rutaInsertarCliente;
  
  posts: Observable<any>;
  newPost: Observable<any>;
  found:string;
  constructor(private http:HttpClient){ }
  
  getPosts(){
    let headers = new HttpHeaders().set('authorization','Basic YXJnZW5pczA2MTI3NEBob3RtYWlsLmNvbTo2NjdkMmI4Y2UzMDFkOWYyZmJiMQ==');
    this.posts = this.http.get(this.ROOT_URL + '/posts', {headers})
  }

  createPost(){
    const data = {
      name: "Francisco"
    }
    const dataAddCliente ={
      name: "Zandro Gutierrez",
      identificationObject:{},
      type: [],
      internalContacts:[]
    }
    
    let headers = new HttpHeaders().set('authorization','Basic YXJnZW5pczA2MTI3NEBob3RtYWlsLmNvbTo2NjdkMmI4Y2UzMDFkOWYyZmJiMQ==');
    this.newPost = this.http.post(this.ROOT_URL, dataAddCliente, {headers : headers})
    
  } 

  ngOnInit() {
  }

}