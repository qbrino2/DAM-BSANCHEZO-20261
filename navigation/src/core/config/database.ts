import { open } from "react-native-quick-sqlite";

export const  db = open({
    name: "navigation_database.sqlite"
});


export const setupDatabase = () => {
    try {
        db.execute(`CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT, username TEXT, correo TEXT,
            fechaNacimiento TEXT, contrasena TEXT
        );`);
        db.execute(`CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            nombre TEXT, sku TEXT, stock INTEGER,
            costoCompra REAL, precioVenta REAL, descripcion TEXT,
            FOREIGN KEY (userId) REFERENCES users(id)
        );`);
    } catch (error) {
        console.error("Error setupDatabase:", error);
    }
};