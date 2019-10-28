//Dependencies
var express = require("express");
var app = express();
var PORT = 8500;

//Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set up your Routes... not sure why the syntax uses the ./

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Need to do an app.post to create new dating profiles

//Listener that effectively "starts" the server
app.listen(PORT,function(){
    console.log("Application listening on PORT: "+ PORT);
});