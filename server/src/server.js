// const express = require("express");
// const router = require("./routes");
// const morgan = require("morgan");
// const cors = require("cors");
// const app = express()

// const server = express();

// server.use(morgan("dev"));
// server.use(express.json());
// server.use(cors());

// server.use(router);
// app.use('/', router)

// module.exports = server;

const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
server.use(cors());

app.use(router);

module.exports = app; // Exporta 'app' en lugar de 'server'