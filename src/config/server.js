const express = require("express");
const { env } = require("./envs");
const cors = require("cors")

const app = express();

const corsOptions = {
  origin: ["https://hoppscotch.io", env.CLIENT_URL],
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))

app.use(express.json());



app.get("/" , (req , res)=> {
  res.json({
    name : "aarada nee"
  })
})

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

module.exports = app;
