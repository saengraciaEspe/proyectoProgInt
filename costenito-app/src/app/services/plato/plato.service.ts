import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  url = "http://127.0.0.1:3000/api";
  constructor(private http: HttpClient) { }

  //manejo de una funcion asincronica
  //get platos
  getAllPlatos()  {
    return this.http.get(this.url);
  }

  //get un plato
  getUnPlato(idplato:string){
    return this.http.get(this.url+'/'+idplato);
  }


  //agregar plato
  addPlato(pl:Plato)
  {
    return this.http.post(this.url, pl);
  }


  //eliminar
  deletePlato(idplato:number){
    return this.http.delete(this.url+'/'+idplato);
  }

  //modificar plato
  editPlato(idplato:string, pl:Plato){
    return this.http.put(this.url+'/'+idplato, pl);
  }


  
}

export interface Plato{
  idplato?:number;
  descplato?:string;
  precioplato?:number;
}
