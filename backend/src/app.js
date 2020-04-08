/**Importacoes  */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const  { errors } = require ('celebrate');

const app = express();

app.use(cors());
app.use (express.json());
app.use(routes);
app.use(errors());

//Export app
module.exports = app;