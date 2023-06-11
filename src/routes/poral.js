

const express = require("express");
const { authoriseDomain } = require("../middlewares/authoriseDomain");
const { onSubmitIdeaController } = require("../controllers/PortalController");
const router = express.Router();


router.use("/submitidea" , authoriseDomain , onSubmitIdeaController)


module.exports.portalRoute = router;