var app = app || {};

app.SingleLessonView = Backbone.View.extend({
	
	tag:"article",
	className:"lessonListItem",
	
	template: _.template( $("#lessonElement").html() ),
	
	render: function() {
		var lessonTemplate = this.template(this.model.toJSON());
		this.$el.html(lessonTemplate);
		return this;
	}
})