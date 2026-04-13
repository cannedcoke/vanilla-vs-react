const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

// rotas para acciones de usuario
router.post("/api/addLink",controller.addLink );
router.post("/api/addTag",controller.addTag );
router.post("/api/addVote",controller.addVote );
router.post("/api/addComment",controller.addComment );

// rutas para acciones del front
router.post("/api/details",controller.details );
router.post("/api/filter",controller.filter );
router.get("/api/populateSelect",controller.populateSelect );

module.exports = router;
