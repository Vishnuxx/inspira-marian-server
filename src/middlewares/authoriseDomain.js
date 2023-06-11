const { env } = require("../config/envs");

module.exports.authoriseDomain = (req, res, next) => {
  const allowedDomains = ["localhost", "hoppscotch.io", env.CLIENT_DOMAIN];
  const requestDomain = req.hostname;
  console.log(requestDomain)
  if (allowedDomains.includes(requestDomain)) {
    console.log("authorised")
    next(); // Allow the request to proceed
  } else {
    res.status(403).send("Forbidden");
  }
};
