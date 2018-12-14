import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './apiconclave.component.html',
  styleUrls: ['./apiconclave.component.css']
})
export class ApiconclaveComponent implements OnInit {
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  
  posts: Observable<any>;

  constructor(private http:HttpClient){ }
  
  getPosts(){
    let params = new HttpParams().set('userId','1');
    this.posts = this.http.get(this.ROOT_URL + '/posts', {params})
  }
  ngOnInit() {
  }

}