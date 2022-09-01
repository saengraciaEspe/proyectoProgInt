import { Component, OnInit } from '@angular/core';
import {PlatoService,Plato} from '../services/plato/plato.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 //variables
  listpl:Plato[]=[];

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.getAllPlatos();
  }
  getAllPlatos(){
    
        this.platoService.getAllPlatos().subscribe(
          res=>{
                  this.listpl=<any>res;
                },
                  err=>console.log(err)
        );
  }

  deletePlato(pl :any){
    this.platoService.deletePlato(Number(pl.idplato)).subscribe(
      res=>{
              console.log('plato eliminado');
              this.getAllPlatos();
            },
            err=>console.log(err)

    );
  }


}
