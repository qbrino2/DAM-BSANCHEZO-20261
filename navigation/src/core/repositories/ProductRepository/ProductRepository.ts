import { db } from "../../config";
import { Product } from "../../entities";

const ProductRepository = {
    create: (product: Product): number | undefined => {
        const result = db.execute(
            `INSERT INTO products (userId, nombre, sku, stock, costoCompra, precioVenta, descripcion)
             VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [product.userId, product.nombre, product.sku, product.stock,
             product.costoCompra, product.precioVenta, product.descripcion]
        );
        return result.insertId;
    },
    findByUser: (userId: number): Product[] => {
        const { rows } = db.execute(
            `SELECT * FROM products WHERE userId = ?;`, [userId]
        );
        return rows?._array ?? [];
    },
    delete: (id: number): void => {
        db.execute(`DELETE FROM products WHERE id = ?;`, [id]);
    }
};

export default ProductRepository;