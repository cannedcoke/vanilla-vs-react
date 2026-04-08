const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.post("/api/filter",controller.filter );
router.post("/api/addLink",controller.addLink );
router.post("/api/addTag",controller.addTag );
router.post("/api/details",controller.details );
router.post("/api/addVote",controller.addVote );
router.get("/api/pupulateSelect",controller.pupulateSelect );
router.post("/api/addComment",controller.addComment );

module.exports = router;
