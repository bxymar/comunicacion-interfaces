export interface Producto {
  
    // Algunos productos NO TIENEN CODIGO BARRAS
  
    readonly id: number, // Propiedad no cambie su valor
    nombre: string,
    stock: number,
    fecha_vencimiento: string,
    numeroLote: number,
    codigoBarra?: string, // Propiedades opcionales
    estado: boolean;
}