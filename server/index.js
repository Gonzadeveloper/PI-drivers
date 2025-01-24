require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require("./src/models/index.js");
const routes = require('./src/routes/index.js'); 
const PORT = process.env.PORT || 3001; // Asegúrate de tener un valor por defecto

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors()); // Configura CORS antes de las rutas


// Rutas
app.use('/', routes);

sequelize.sync({ force: false }) // Cuidado: esto borrará y creará las tablas de nuevo
    .then(() => {
        console.log('Tablas sincronizadas correctamente');
    })
    .catch(err => {
        console.error('Error al sincronizar tablas:', err);
    });

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app