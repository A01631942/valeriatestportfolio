// Tools Routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");


// TOOLS
router.get("/tools", function(req,res){
	res.redirect("tools/CAD");
})

// CAD MODELING
router.get("/tools/CAD", function(req,res){
	res.render("tools/CAD",{title:"CAD Modeling"});
})
// 2D Sketching
router.get("/tools/sketching", function(req,res){
	res.render("tools/sketching",{title:"2D Sketching"});
})
// Rapid Prototyping
router.get("/tools/prototyping", function(req,res){
	res.render("tools/prototyping",{title:"Rapid Prototyping"});
})
// Web Design
router.get("/tools/webdesign", function(req,res){
	res.render("tools/web",{title:"Web Design"});
})
// Software
router.get("/tools/software", function(req,res){
	res.render("tools/software",{title:"Software"});
})

module.exports = router;