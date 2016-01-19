var chapter1section1 = new app.SingleSection({
	name:"Section 1",
	link:"c1s1"
});
var chapter1section2 = new app.SingleSection({
	name:"Section2",
	link:"c1s2"
});
var chapter1section3 = new app.SingleSection({
	name:"Section3",
	link:"c1s3"
});

var lessonGroup = new app.AllLessons([
	chapter1section1, chapter1section2, chapter1section3
]);

var lessonGroupView = new app.AllLessonsView({collection:lessonGroup});
$("allLessons").html(lessonGroupView.render().el);