// require ("dotenv").config();
// const bodyParser = require('body-parser');
// const { conn } = require('./src/db.js');
// const { loadTeamsFromAPI } = require('./src/controllers/getAllTeams.js');
// const server = require("./src/server");

const express = require('express');
const app = express()
const PORT =  process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware para procesar JSON y URL-encoded bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// conn.sync({ force: false }).then(() => {
//   loadTeamsFromAPI();
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))
