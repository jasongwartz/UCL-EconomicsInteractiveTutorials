var app = app || {};

app.SingleSection = Backbone.Model.extend({
	defaults:{
		color:"blue"
	},
	initialize: function() {
		// instance has been instanciated
		this.on("change", function() {
			// something changes
		});
	}
});