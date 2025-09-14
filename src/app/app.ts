
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoFormComponent } from './producto-form.component';

@Component({
  selector: 'app-root',
  imports: [ProductoFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'product-frontend';

  changeTitle(){
    this.title = 'Andrea';
  }
}


