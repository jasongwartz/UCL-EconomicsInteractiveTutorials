angular.module('app.services', [])

.factory('QuestionFactory', [function($scope){
	var questions;
        
    $.getJSON('data/datatest.json', function(response){
       questions = response;
    });

return {
    
    questionText: function(question) {
       
        for(var i = 0; i < 30; i++){
			if(questions[i].id == question){
                
                return questions[i].text;
                
            }
        }
    },
    
	questionChecker: function(question, submission){
        
		console.log("carried question id " + question);
		console.log("carried submission " + submission);
		
		for(var i = 0; i < 30; i++){
			if(questions[i].id == question){

				if(questions[i].type == "SingleAnswer"){
					if(questions[i].answer == submission){
						console.log(questions[i].correct);
						var answerArray = [true, questions[i].correct];
						return answerArray;
					}
					else
						console.log(questions[i].incorrect);
						var answerArray = [false, questions[i].incorrect];
						return answerArray;
				}
				if(questions[i].type == "MultipleChoice"){
					console.log(questions[i].choices[submission]);
					if(questions[i].choices[submission].solution == "y"){
						var answerArray = [true, questions[i].choices[submission].message];
						return answerArray;
					} else
						var answerArray = [false, questions[i].choices[submission].message];
						return answerArray;
					
				}
				if(questions[i].type == "Range"){
					if(questions[i].answer == submission){
						console.log(questions[i].correct);
						var answerArray = [true, questions[i].correct];
						return answerArray;
					}
					else if(questions[i].answer < submission){
						console.log(questions[i].highmessage);
						var answerArray = [false, questions[i].highmessage];
						return answerArray;
					}
					else if(questions[i].answer > submission){
						console.log(questions[i].lowmessage);
						var answerArray = [false, questions[i].lowmessage];
						return answerArray;
					}
				}

			}
		}
		return null;
	

	}
}


}])

.service('SectionNavigation', [function(){

    var locations = [
    {
        "id": 1,
        "sections": [
        {
            "message": "View Section 1"   
        },{
            "message": "View Section 2" 
        },
        {  
            "message": "View All" 
        }
        ]
    },
    {
        "id": 2,
        "sections": [
        {
            "message": "View Section 1"   
        },
        {
            "message": "View Section 2"   
        },{
            "message": "View Section 3" 
        },{
            "message": "View Section 4" 
        },
        {  
            "message": "View Section 5" 
        },
        {  
            "message": "View Section 6" 
        },
        {  
            "message": "View All" 
        }
        ]
    },
    {
        "id": 3,
        "sections": [
        {
            "message": "View Section 2"   
        },{
            "message": "View Section 3" 
        },{
            "message": "View Section 4" 
        },
        {  
            "message": "View Section 5" 
        },
        {  
            "message": "View Section 6" 
        },
        {  
            "message": "View All" 
        }
        ]
    },
    ]

    return {
        navigation: function(chapterID){

            for(var i = 0; i < 12; i++){

                if(chapterID == locations[i].id){

                    var chapterData = locations[i].sections;
                    console.log(chapterData);
                    return chapterData;

                } 


            }
        }
            
    }


}]);

