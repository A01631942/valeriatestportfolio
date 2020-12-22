// Show Routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var products   = require("../js/Product");
var jewelry    = require("../js/Jewelry");
var graphics   = require("../js/Graphic");
var uxui       = require("../js/UX");   
var cad        = require("../js/CAD");   

//find an element in an array
function findObject(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

// PRODUCT
router.get("/mywork/product/:show",function(req,res){	
	// select the product based on the show property
    var product = findObject(products, "show", req.params.show);
    var capital = product.show.charAt(0).toUpperCase() + product.show.slice(1);
    res.render("show/product", {title:capital, product:product, products:products});
});
// JEWELRY
router.get("/mywork/jewelry/:show",function(req,res){	
	// select the product based on the show property
    var jewel= findObject(jewelry, "show", req.params.show);
    var capital = jewel.show.charAt(0).toUpperCase() + jewel.show.slice(1);
    res.render("show/jewelry", {title:capital, jewel:jewel, jewelry:jewelry});
});
// GRAPHIC
router.get("/mywork/graphic/:show",function(req,res){	
	// select the product based on the show property
    var graphic = findObject(graphics, "show", req.params.show);
    var capital = graphic.show.charAt(0).toUpperCase() + graphic.show.slice(1);
    res.render("show/graphic", {title:capital, graphic:graphic, graphics:graphics});
});
// UX
router.get("/mywork/ux/:show",function(req,res){	
	// select the product based on the show property
    var ux = findObject(uxui, "show", req.params.show);
    var capital = ux.show.charAt(0).toUpperCase() + ux.show.slice(1);
    res.render("show/ux", {title:capital, ux:ux, uxui:uxui});
});

// CAD MODELING
router.get("/tools/CAD/:show",function(req,res){	
	// select the product based on the show property
	var tool = findObject(cad, "show", req.params.show);
	var capital = tool.show.charAt(0).toUpperCase() + tool.show.slice(1);
    res.render("show/tools", {title:capital, tool:tool, cad:cad});
});

module.exports = router;