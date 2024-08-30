require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { conn } = require('./src/db.js');
const { loadTeamsFromAPI } = require('./src/controllers/getAllTeams.js');
const routes = require('./src/routes/index.js'); 

const app = express();
const PORT = process.env.PORT || 3001; // Asegúrate de tener un valor por defecto

// Middleware
app.use(morgan('dev'));
app.use(cors()); // Configura CORS antes de las rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/', routes);

// Sincroniza la base de datos y luego carga los equipos
conn.sync({ force: false }).then(() => {
  // Cargar equipos después de sincronizar la base de datos
  // loadTeamsFromAPI().catch(error => {
  //   console.error('Error loading teams:', error);
  // });
  //Comento el lecantamiento de equipos por api para desplegarlo en la nube

  // Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => console.error('Database connection error:', error));