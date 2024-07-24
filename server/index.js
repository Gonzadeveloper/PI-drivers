// require ("dotenv").config();
// const bodyParser = require('body-parser');
// const { conn } = require('./src/db.js');
// const { loadTeamsFromAPI } = require('./src/controllers/getAllTeams.js');
// const server = require("./src/server");

// const express = require('express');
// const app = express()
// const PORT =  process.env.PORT || 3000


// //Middleware para procesar JSON y URL-encoded bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// conn.sync({ force: false }).then(() => {
//   loadTeamsFromAPI();
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))


require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const { conn } = require('./src/db.js');
const { loadTeamsFromAPI } = require('./src/controllers/getAllTeams.js');

const app = express();
const PORT = process.env.PORT || 3000; // Asegúrate de tener un valor por defecto en caso de que PORT no esté definido

// Middleware para procesar JSON y URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

conn.sync({ force: false }).then(() => {
  //loadTeamsFromAPI();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => console.error(error));

