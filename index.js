const server = require('./src/config/server')

const {execomRoute} = require("./src/routes/execom");
const express = require("express")

const path = require("path");
const { uploadIdea } = require('./src/services/portalService');
const { portalRoute } = require('./src/routes/poral');

server.use("/static", express.static(path.join(__dirname, "public")));

server.use(execomRoute);
server.use(portalRoute)

//test
// const data = {
//   email: "srffsdf@marian.ac.in",
//   name: "sdfdsf",
//   number: "23232",
//   whatsappnumber: "1234123400",
//   problem: "fdsfsdvsdvsdvsd",
//   solution: "sdsvsdsd",
//   targetaudience: "vsdvsdv",
//   skills: "dvsdvsdv",
// };

// uploadIdea(data)
