var questions = {
	"name":"Question Set",
	
	"q3":{
		"qType" : "range",
		"bottomRange" : 500,
		"topRange" : 1000,
		"correctMessage" : "Great job!",
		"incorrectMessage" : "You suck!"
	},
	
	"q4":{
		"correctAnswer" : 200,
		"correctMessage" : "Wonderful!",
		"incorrectMessage" : "Terrible!"
	}
}



function checkAnswer(qNum, submission) {
	
	var q = questions[qNum];
	
	if (q[qType] == "binary") {
	
		if (submission == q[correctAnswer]) {
			return [true, q[correctMessage]]
		} else {
			return [false, q[incorrectMessage]]
		}
		
		
		
	} else if (q[qType] == "range") {
		
		if (q[bottomRange] < submission < q[topRange]) {
			return [true, q[correctMessage]]
		} else if (submission < bottomRange) {
			if (q[tooLowMessage] != null) {
				return q[tooLowMessage]
			}
			return [false, q[incorrectMessage]]
		}		
		
	}
}