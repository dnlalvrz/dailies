// import the needed node_modules.
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8000;

// This will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send({ test: "Client succesfully connected to express" });
});

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(PORT, () => console.log("🌍 Listening on port " + PORT));
