angular.module('app.directives', [])

	.directive("question", function (QuestionFactory) {

		return {

			restrict: "E",

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
    			}
			});
		}
	};
})

.directive("footer", function(Chapters) {

	return {
		
		restrict: "E",
		templateUrl: "partials/footer.html",
		scope: {
		 	sid:'='
		 },
		transclude: false,
		controller: "FooterController",
		link: function(scope, element, attributes) {
  			 attributes.$observe('sid', function(value) {
   			  if (value) {
//   			   scope.sid = value; &&& not sure why this is needed
    			}
  			});
		}
 	
	};
});

