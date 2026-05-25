import { Component, input} from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-componente-detalles',
  imports: [],
  templateUrl: './componente-detalles.html',
  styleUrl: './componente-detalles.css',
})
export class ComponenteDetalles {

  productoRecibido = input<Producto>();
}