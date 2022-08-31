import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  url = "http://localhost:3000/";
  constructor(public http: HttpClient, public https: HttpClient) { }

  //manejo de una funcion asincronica
  getAllPlatos()  {
    return new Promise(resolve=>{
      this.http.get(this.url + 'plato/').subscribe(data=>{
        resolve(data);
      }, err =>{
        //si existe un error, envia un error
        console.log(err);
      });
    });
  }


}
