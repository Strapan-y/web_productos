// app.ts
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <- importante

@Component({
  selector: 'app-root',
  standalone: true,             // si tu componente es standalone, inclúyelo
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']      // usar styleUrls (plural)
})
export class App implements OnInit {
  title = 'product-frontend';
  isDarkMode = signal(false);

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDarkMode.set(true);
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme() {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);
    if (next) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
