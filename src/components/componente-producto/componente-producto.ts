import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ComponenteDetalles } from '../componente-detalles/componente-detalles';

@Component({
  selector: 'app-componente-producto',
  imports: [ComponenteDetalles],
  templateUrl: './componente-producto.html',
  styleUrl: './componente-producto.css',
})
export class ComponenteProducto {

  // Tenemos un objeto (Producto) usando las propiedades de la interfaz Producto

  productoUno: Producto = {
    id: 5,
    nombre: "Coca Cola",
    stock: 20,
    fecha_vencimiento: "25-05-2027",
    numeroLote: 3,
    codigoBarra: "90156B",
    estado: true
  }

  productoDos: Producto = {
    id: 1,
    nombre: "Pepsi",
    stock: 10,
    fecha_vencimiento: "27-09-2028",
    numeroLote: 3,
    estado: false,
  }
}