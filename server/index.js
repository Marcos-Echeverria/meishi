const express = require('express');
const app = express();
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');

app.use(express.json());

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});