const mongoose = require('mongoose');

const DB_URI = `mongodb+srv://marcosalbertoecheverria:KmKaAweZsapjO3e0@meishodb.gob0zda.mongodb.net/`

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