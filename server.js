// Import dependencies
var express = require("express");
var bodyparser = require("body-parser");
var path = require('path');

// initialize our server
var app = express();

// Define port
var PORT = process.env.PORT || 3000;

// Set up middleware (body-parser)
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Set up routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Turn on server
app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});