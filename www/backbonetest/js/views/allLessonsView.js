var app = app || {};

app.allLessonsView = Backbone.View.extend({
	
	tagName:"section",
	
	render: function() {
		this.collection.each(this.addLesson, this);
		return this;
	},
	
	addLesson: function(lesson) {
		var lessonView = new app.SingleLessonView ({ model: lesson});
		this.$el.append(lessonView.render().el);
	}
	
	
})