// Work routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");

// MYWORK
router.get("/mywork", function(req, res){
	res.redirect("/mywork/product");
})

// PRODUCT
router.get("/mywork/product", function(req,res){
    res.render("mywork/product",{title:"Product Design"})
})

// JEWELRY
router.get("/mywork/jewelry", function(req,res){
	res.render("mywork/jewelry",{title:"Jewelry Design"});
})
// GRAPHIC
router.get("/mywork/graphic", function(req,res){
	res.render("mywork/graphic",{title:"Graphic Design"});
})
// UX/UI
router.get("/mywork/ux", function(req,res){
	res.render("mywork/ux",{title:"UX/UI Design"});
})

module.exports = router;