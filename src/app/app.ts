import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteProducto } from '../components/componente-producto/componente-producto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comunicacion-interfaz');
}
