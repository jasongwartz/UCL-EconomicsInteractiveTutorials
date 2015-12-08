angular.module('app.directives', [])

.directive("question", function(QuestionFactory) {

	return {
		
		restrict: "E",

		// if questionType(qid) == 'single' : 

		templateUrl: "partials/question.html",
		scope: {
		 	qid:'='
		 },
		transclude: false,
		controller: "QuestionController",
 		link: function(scope, element, attributes) {
  			 attributes.$observe('qid', function(value) {
   			  if (value) {
   			   scope.qid = value;
			   scope.submission = "asdfasdf"
    }
  });
}
	};
}
	
	);

