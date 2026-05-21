export interface Product {
    id?: number;
    userId: number;
    nombre: string;
    sku: string;
    stock: number;
    costoCompra: number;
    precioVenta: number;
    descripcion: string;
}