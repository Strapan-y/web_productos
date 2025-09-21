import { Routes } from '@angular/router';
import { ProductoFormComponent } from './components/product-form/producto-form.component';
import { ProductoListComponent } from './components/product-list/producto-list.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/nuevo', component: ProductoFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productos' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
