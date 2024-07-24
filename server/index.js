require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const { conn } = require('./src/db.js');
const { loadTeamsFromAPI } = require('./src/controllers/getAllTeams.js');

const app = express();
const PORT = process.env.PORT || 3000; // Asegúrate de tener un valor por defecto

// Middleware para procesar JSON y URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sincroniza la base de datos y luego carga los equipos
conn.sync({ force: false }).then(() => {
  // Cargar equipos después de sincronizar la base de datos
  loadTeamsFromAPI().catch(error => {
    console.error('Error loading teams:', error);
  });
  
  // Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => console.error('Database connection error:', error));

