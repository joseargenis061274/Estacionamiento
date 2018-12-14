import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: Observable<any>;

  constructor(private http:HttpClient){ }
  getPosts(){
    let params = new HttpParams().set('userId','1');
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }
  ngOnInit() {
  }

}