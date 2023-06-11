const express = require("express");
const {env} = require("./envs");
const cors = require("cors")

const app = express();

const corsOptions = {
  origin: env.CORS_ORIGINS.split(" "),
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))

app.use(express.json());


app.set("port", process.env.PORT || 3000);

// app.get("/" , (req , res)=> {
//   res.json({
//     // name : "aarada nee"
//   })
// })

app.listen(() => {
  console.log(`Server is running on port ${app.get("port")}`);
});

module.exports = app;
