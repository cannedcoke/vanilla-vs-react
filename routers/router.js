const express = require("express");
const router = express.Router();

// const storeController = require("../controllers/storeController")
// const records = [{ votos: 1, tema: "abel", enlace: "https:haso.com", id: 1 }];

router.get("/", (req, res) => {
  res.render("dashboard", { records });
});

module.exports = router;
