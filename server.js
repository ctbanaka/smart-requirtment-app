const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let routes = require("./app/routes");

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));


const db = require("./app/models");
db.sequelize.sync({force:true})
  .then(() => {
    console.log("Synced....... db.......");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
 
app.use(express.json());

 
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.use('/',routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});