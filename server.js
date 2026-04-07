const express = require("express");

const app = express();

const path = require("path");


const Route = require("./routers/router");

require("./middlewares/db");


app.use(express.json());
// parsea los datos de la request para que sean usables

// defino de donde se sirven los archivos estaticos
app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", Route);

app.listen(5000, () => {
  console.log("Server running http://localhost:5000");
});
