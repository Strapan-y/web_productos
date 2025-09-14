import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="productoForm" (ngSubmit)="onSubmit()" class="producto-form">
      <div>
        <label for="nombre">Nombre:</label>
        <input id="nombre" formControlName="nombre" />
        @if (productoForm.get('nombre')?.invalid && productoForm.get('nombre')?.touched) {
          <div class="error">El nombre es obligatorio.</div>
        }
      </div>
      <div>
        <label for="precio">Precio:</label>
        <input id="precio" type="number" formControlName="precio" />
        @if (productoForm.get('precio')?.invalid && productoForm.get('precio')?.touched) {
          <div class="error">El precio es obligatorio.</div>
        }
      </div>
      <div>
        <label for="imagenUrl">URL de la imagen:</label>
        <input id="imagenUrl" formControlName="imagenUrl" />
        @if (productoForm.get('imagenUrl')?.invalid && productoForm.get('imagenUrl')?.touched) {
          <div class="error">La URL de la imagen es obligatoria.</div>
        }
      </div>
      <button type="submit" [disabled]="productoForm.invalid">Agregar Producto</button>
    </form>
  `,
  styles: [
    `.producto-form { max-width: 350px; margin: 32px auto; padding: 24px; border: 1px solid #ccc; border-radius: 8px; background: #fafafa; }
     .producto-form div { margin-bottom: 16px; }
     .producto-form label { display: block; margin-bottom: 4px; font-weight: bold; }
     .producto-form input { width: 100%; padding: 8px; border: 1px solid #bbb; border-radius: 4px; }
     .producto-form .error { color: #d32f2f; font-size: 0.9em; margin-top: 4px; }
     .producto-form button { width: 100%; padding: 10px; background: #1976d2; color: #fff; border: none; border-radius: 4px; font-size: 1em; cursor: pointer; }
     .producto-form button:disabled { background: #aaa; cursor: not-allowed; }`
  ]
})
export class ProductoFormComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      imagenUrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      // Aquí puedes manejar el producto creado
      console.log(this.productoForm.value);
      this.productoForm.reset();
    } else {
      this.productoForm.markAllAsTouched();
    }
  }
}
