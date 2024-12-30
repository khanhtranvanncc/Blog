const path = require('path');
const express = require("express");
const morgan = require("morgan");
const { engine } = require('express-handlebars'); // Import the engine function

const app = express();
const port = 3000;

// Set up the handlebars engine
app.engine('hbs', engine({
  extname: ".hbs",
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

// Define a route
app.get("/", (req, res) => {
  res.render("home", { message: "Hello Handlebars!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
