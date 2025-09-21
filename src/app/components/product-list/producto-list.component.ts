import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Model/producto';
import { ProductoCardComponent } from '../product-card/producto-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, ProductoCardComponent, RouterLink],
  templateUrl: '../../components/product-list/producto-list.components.html',
  styleUrl: '../../components/product-list/producto-list.component.css'
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  // fallback de ejemplo
  productosDefault: Producto[] = [
    { id: 1, nombre: 'Producto demo 1', precio: 19.99, imagenUrl: 'https://i.pinimg.com/1200x/99/73/97/9973979e75eab4c8a0518e919c31d868.jpg' },
    { id: 2, nombre: 'Producto demo 2', precio: 29.99, imagenUrl: 'https://i.pinimg.com/1200x/99/73/97/9973979e75eab4c8a0518e919c31d868.jpg' },
    { id: 3, nombre: 'Producto demo 3', precio: 39.99, imagenUrl: 'https://i.pinimg.com/1200x/99/73/97/9973979e75eab4c8a0518e919c31d868.jpg' },
    { id: 4, nombre: 'Producto demo 4', precio: 49.99, imagenUrl: 'https://i.pinimg.com/1200x/99/73/97/9973979e75eab4c8a0518e919c31d868.jpg' }

  ];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error: (error) => {
        console.error("Ocurrió un error al hacer la peticion al backend: ", error);
        this.productos = this.productosDefault; // fallback

      }
    });
  }
}


