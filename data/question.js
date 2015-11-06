

$.getJSON('data.json', function(data) {

	

})

function checkAnswer(question, submission) {
	
		// SingleAnswer type  -- Also applies to True/False - question["answer"] == True or False
	if (question["type"] == "SingleAnswer") {
	
		if (submission == question["answer"]) {
			return [true, question["correct"]]
		} else {
			return [false, question["incorrect"]]
		}
		
		// Range type
	} else if (question["type"] == "Range") {
		
		var intsubmission = parseInt(submission)
		
		if (intsubmission == question["answer"]) {
			return [true, question["correct"]]
		} else if (intsubmission < question["answer"]) {
			return [true, question["lowmessage"]]
		} else if (intsubmission > question["answer"]) {
			return [false, question["highmessage"]]
		}
		
		// MCQ type
	} else if (question["type"] == "multipleChoice") {
		
		var choices = question["choices"]

		var user_choice = choices[submission] 
		// submission will be a short code (string) which
		// points to the KEY of a 'choice' entry in the 'choices' list
		
		// choices = [
			// "answer1":{
				// "solution":false,
				// "message":"Try being better at things!"
			//	},
		
			// "answer2":{
				// "solution":true,
				// "message":"You are great!"
			// }
		// ]
		
		return [user_choice["solution"], user_choice["message"]]
	}
}
