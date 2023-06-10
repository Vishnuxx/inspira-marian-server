module.exports.authoriseDomain = (req, res, next) => {
  const allowedDomains = ["localhost", "hoppscotch.io"];
  const requestDomain = req.hostname;
  if (allowedDomains.includes(requestDomain)) {
    next(); // Allow the request to proceed
  } else {
    res.status(403).send("Forbidden");
  }
};
