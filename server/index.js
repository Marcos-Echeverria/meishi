const express = require('express');
const app = express();
const debug = require('debug')('app:main');
const initDB = require('./src/database/index');
const { Config } = require('./src/config/index');
const MenuRouter = require('./src/routes/menu_routes');
const cors = require('cors');

//Enrutado
app.use(cors());
app.use(express.json());
app.use("/api", MenuRouter);

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`);
});

initDB();