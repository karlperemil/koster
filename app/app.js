define(function(require, exports, module) {
	"use strict";

	// External dependencies.
	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");

	// Alias the module for easier identification.
	var app = module.exports;

	// The root path to run the application through.
	app.root = "/";


	var Photo = Backbone.Model.extend({
		defaults: {
			url:"images/photos/",
			description: "whatever description"
		},
		initialize:function(){
			console.log("this is an image");
		}
	});

	var Album = Backbone.Collection.extend({
		model: Photo
	});

	var photo1 = new Photo({
		url:"images/photos/photo1.jpg",
		description: "Utsidan"
	});

	var photo2 = new Photo({
		url:"images/photos/photo2.jpg",
		description: "Södra Lägenheten"
	});

	var photo3 = new Photo({
		url:"images/photos/baksida.jpg",
		description: "Baksidan"
	});

	var album1 = new Album([photo1,photo2,photo3]);

	console.log(album1.models);




});
