const server = require('./src/config/server')

const {execomRoute} = require("./src/routes/execom");

server.use(execomRoute);
