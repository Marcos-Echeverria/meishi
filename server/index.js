const express = require('express');
const app = express();
const debug = require('debug')('app:main');
const initDB = require('./src/database/index');
const { Config } = require('./src/config/index');
const MenuRouter = require('./src/routes/menu_routes');

//Enrutado
app.use("/api", MenuRouter); 
// app.use(express.json());

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});

initDB()