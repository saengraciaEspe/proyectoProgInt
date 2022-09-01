import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material';
import { MenuComponent } from './menu/menu.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SalirComponent } from './salir/salir.component';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './plato/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PedidoComponent,
    SalirComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
