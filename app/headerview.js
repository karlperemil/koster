define(function(require,exports,module){
	"use strict";

	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");

	module.exports = Backbone.View.extend({
		initialize:function(){
			console.log("headerview.js");
			this.render();
		},
		render:function(){
			var template = _.template($("#header_template").html(), {});
			this.$el.html( template );
		},
		events: {
            "click input[type=button]": "clickBook"
        },
        clickBook: function( event ){
            // Button clicked, you can access the element that was clicked with event.currentTarget
            alert( "Search for " + $("#header_button").val() );
        }
	});
});