//Vinner
var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mongoose = require("mongoose");

// routes
var appRoutes = require("./routes/index");
var workRoutes  = require("./routes/work");
var toolsRoutes = require("./routes/tools");
var showRoutes  = require("./routes/show");

// importar variables de entorno locales
require("dotenv").config({path: "./variables.env"});

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

// use routing files
app.use(appRoutes);
app.use(showRoutes);
app.use(workRoutes);
app.use(toolsRoutes);

const host= process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;


// Server
app.listen(port, host, function(){
    console.log("Server Portafolio working");
})