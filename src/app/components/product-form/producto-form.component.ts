import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../Model/producto';
import { ProductoService } from '../../Services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
onReset() {
  this.productoForm.reset();
}
  productoForm: FormGroup;
  isSubmitting = false;

  // El FormBuilder simplifica la creación de formularios reactivos
  constructor(private fb: FormBuilder,
              private productoService: ProductoService,
              private router: Router) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      imagenUrl: [
      '',
      [
        Validators.required,
        Validators.pattern('https?://.+\\.(png|jpg|jpeg|gif|bmp|webp)$')
      ]
      ]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.productoForm.invalid) {
      this.markFormGroupTouched(this.productoForm);
      alert('Por favor, corrige los errores en el formulario.');
      return;
    }

    const { nombre, precio, imagenUrl } = this.productoForm.value;
    const body = { nombre, precio, imagenUrl }; // Excluimos id en creación
    console.log('[CREATE][REQUEST]', body);
    this.isSubmitting = true;

    this.productoService.createProducto(body as any).subscribe({
      next: (created) => {
        console.log('[CREATE][SUCCESS]', created);
        alert('Producto agregado con éxito');
        this.productoForm.reset();
        this.isSubmitting = false;
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('[CREATE][ERROR raw]', err);
        const status = err?.status;
        const backendMsg = err?.error?.message || err?.message || 'Sin detalle';
        alert(`Error al crear el producto. Status: ${status ?? 'desconocido'}\nDetalle: ${backendMsg}`);
        this.isSubmitting = false;
      }
    });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

}





