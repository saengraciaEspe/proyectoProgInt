import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  url = '/api';
  constructor(private http: HttpClient) { }

  //manejo de una funcion asincronica
  //get platos
  getAllPlatos()  {
    return this.http.get(this.url);


  }

}
