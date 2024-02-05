import { Sequelize } from "sequelize";

// Konfigurasi database
const sequelize = new Sequelize(
    // Nama Database
    "cashier_app",
    // User database
    "root",
    // Password database
    "root",
    // Database Engine 
    {
        host: "172.17.0.2",
        dialect: "mysql"
    }
);


export default sequelize;