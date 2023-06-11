const server = require('./src/config/server')

const {execomRoute} = require("./src/routes/execom");
const express = require("express")

const path = require("path");
const { uploadIdea } = require('./src/services/portalService');
const { portalRoute } = require('./src/routes/poral');
const { mediaRoute } = require('./src/routes/media');

server.use("/static", express.static(path.join(__dirname, "public")));


server.use(portalRoute)
server.use(mediaRoute)


