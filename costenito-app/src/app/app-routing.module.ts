import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import {PedidoComponent} from './pedido/pedido.component';
import {SalirComponent} from './salir/salir.component';

const routes: Routes = [{
  path: "menu", component:MenuComponent
  },
  {
    path:"", component:MenuComponent
  },
  {
    path:"pedido", component:PedidoComponent
  },
  {
    path:"salir", component:SalirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
