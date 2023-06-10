const server = require('./src/config/server')

const {execomRoute} = require("./src/routes/execom");
const express = require("express")

const path = require("path");
server.use("/static", express.static(path.join(__dirname, "public")));

server.use(execomRoute);
