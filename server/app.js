const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const songs = require("./routes/api/songs");

const app = express();
const port = 5000;
const uri = "mongodb+srv://userda:GiVd1iXsMITSGya2@cluster0-tolzl.mongodb.net/test?retryWrites=true&w=majority";

app.use(bodyParser.json());


mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/api/songs", songs);

app.listen(port, () => console.log("Server is running!!! on", port));