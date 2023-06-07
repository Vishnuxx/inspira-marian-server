const { execomController } = require("../controllers/ExecomController");
const express = require("express")
const router = express.Router();

router.get("/execom" , execomController);

module.exports.execomRoute = router