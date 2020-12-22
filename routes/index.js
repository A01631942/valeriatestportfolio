// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");

//HOME
router.get("/", function(req, res){
	res.render("home", {title:"Valeria Toscano"});
})

//CONTACT
router.get("/contact", function(req, res){
	res.render("contact", {title:"Contact"});
})


module.exports = router;