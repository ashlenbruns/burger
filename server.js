const express = require('express');
require('dotenv').config();

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));   
app.use(express.static("public/burger.png"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" } ));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_Controller");

app.use(routes);  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
