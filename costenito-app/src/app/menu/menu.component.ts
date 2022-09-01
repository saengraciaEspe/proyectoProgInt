import { Component, OnInit } from '@angular/core';
import {PlatoService} from '../services/plato/plato.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.getAllPlatos();
  }
  getAllPlatos(){
    
        this.platoService.getAllPlatos().subscribe(
          res=>{
                  console.log(res);
                },
                  err=>console.log(err)
        );
  }
}
