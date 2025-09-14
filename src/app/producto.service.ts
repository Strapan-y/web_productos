import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor() {}

  getProductos(): Producto[] {
    return [
      {
        id: 1,
        nombre: 'Camiseta',
        precio: 19.99,
        imagenUrl: 'https://via.placeholder.com/150?text=Camiseta',
      },
      {
        id: 2,
        nombre: 'Pantalón',
        precio: 29.99,
        imagenUrl: 'https://via.placeholder.com/150?text=Pantalon',
      },
      {
        id: 3,
        nombre: 'Zapatos',
        precio: 49.99,
        imagenUrl: 'https://via.placeholder.com/150?text=Zapatos',
      },
    ];
  }
}
