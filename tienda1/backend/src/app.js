const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/api/users', (req, res)=>res.send('user routes'))
app.get('/api/inventario', (req, res)=>res.send('inventario routes'));

module.exports = app;