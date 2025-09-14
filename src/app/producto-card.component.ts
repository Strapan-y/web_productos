import { Component, Input } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto-card',
  template: '<div class="producto-card">\n  <img [src]="producto.imagenUrl" [alt]="producto.nombre" width="150" height="150" />\n  <h3>{{ producto.nombre }}</h3>\n  <p>Precio: ${{ producto.precio }}</p>\n  <p>ID: {{ producto.id }}</p>\n</div>',
  styles: [
    '.producto-card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 8px; text-align: center; width: 180px; box-shadow: 2px 2px 8px #eee; }',
    '.producto-card img { border-radius: 4px; margin-bottom: 8px; }'
  ]
})
export class ProductoCardComponent {
  @Input() producto!: Producto;
}
