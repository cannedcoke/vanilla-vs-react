const express = require("express");

const app = express();

const path = require("path");

const Route = require("./routers/router");

// middlewware para conexion a la base de datos
require("./middlewares/db");

// cors para cross origin requests
const cors = require("cors");
app.use(cors());

app.use(express.json());

// ubicacion de los archivos estaticos
app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", Route);

app.listen(5000, () => {
  console.log("Server running http://localhost:5000");
});
