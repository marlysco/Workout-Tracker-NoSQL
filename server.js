const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Mongo DB and Heroku configuration
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





