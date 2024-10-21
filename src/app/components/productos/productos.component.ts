import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    { id: 1, nombre: 'Banana', precio: 100, descuento: true },
    { id: 2, nombre: 'Manzana', precio: 200, descuento: false },
    { id: 3, nombre: 'Coco', precio: 300, descuento: false }
  ];

  agregarProducto(nombre: string, precio: string) {
    const nuevoProducto = {
      id: this.productos.length + 1,
      nombre: nombre,
      precio: Number(precio), //Paso el precio que esta en formato string a numero
      descuento: false
    }

    this.productos.push(nuevoProducto);
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
    //El método filtra el arreglo de productos, eliminando aquel cuyo id
    //coincide con el que se pasa como parámetro.
    //Filter devuelve un nuevo arreglo sin modificar el original.
  }


  // Método para cambiar el estado del descuento
  agregarSacarDescuento(producto: any) {
    producto.descuento = !producto.descuento;
    // invierte el estado actual de descuento del producto.
    // operador != Si estaba en true, pasará a false, y viceversa.
  }
}
