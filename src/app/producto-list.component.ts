import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { ProductoCardComponent } from './producto-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, ProductoCardComponent],
  template: `
    <div class="producto-list">
      <app-producto-card *for="let producto of productos; track producto.id" [producto]="producto"></app-producto-card>
    </div>
  `,
  styles: [`
    .producto-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin: 24px 0;
    }
  `]
})
export class ProductoListComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
  }
}
