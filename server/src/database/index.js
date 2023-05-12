const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.MONGO_DB

module.exports = () => {
    const connect = async () => {
        try {
            await mongoose.connect(DB_URI);
            console.log('Conexion exitosa');
        } catch (err) {
            console.log('Error en la base de datos', err);
        }
    };
    connect();
};