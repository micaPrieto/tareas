import { Routes } from '@angular/router';
import { PaginaAccesoComponent } from './pages/pagina-acceso/pagina-acceso.component';
import { Component } from '@angular/core';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
  {
    path:'',
    component :PaginaAccesoComponent
  },
  {
    path:'usuarios',
    component:ProductosComponent

  }
];
