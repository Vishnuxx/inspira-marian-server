

const express = require("express");
const { authoriseDomain } = require("../middlewares/authoriseDomain");
const { mediaController } = require("../controllers/mediaController");
const router = express.Router();

router.get("/media", authoriseDomain, mediaController);

module.exports.mediaRoute = router;