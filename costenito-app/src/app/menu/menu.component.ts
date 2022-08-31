import { Component, OnInit } from '@angular/core';
import {PlatoService} from '../services/plato/plato.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  platos :any=[];

  constructor(public platoService: PlatoService) { }

  ngOnInit(): void {
    this.getALLPlatos();
  }
  getALLPlatos(){
    try{
    this.platos=this.platoService.getAllPlatos();
    
    
    ;
    }catch(err){
      console.log(err);
    }
  }
}
