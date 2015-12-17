angular.module('app.services', [])

    .factory('Chapters', [function ($scope) {
        

        /// source http://stackoverflow.com/questions/10775787/function-wait-with-return-until-getjson-is-finished   
        // http://stackoverflow.com/questions/684672/loop-through-javascript-object
        // http://api.jquery.com/each/          
        var chapters;
        function getChapterData() {
            return $.getJSON("data/chapters.json").then(function (data) {
                return data;
            });
        }
        return {
            getChapters: function () {



                getChapterData().then(function (returndata) {

                    console.log(returndata);
                    chapters = returndata;
                    console.log("getChapters ran");
                    console.log(chapters)

                })
                return chapters;
                console.log(chapters);

            },

            getTitles: function () {
                var titles = [];
                getChapterData().then(function (c) { // c is returned chapter data        
                    for (var key in c) {
                        if (c.hasOwnProperty(key)) {
                            titles.push( [ key, c[key]["name"] ] )
                        }
                    }
                }
                )
                return titles;    
            },

            getSections: function () {
                var sections = [];
                getChapterData().then(function (c) { // c is returned chapter data
                            
                            
                            
                    for (var key in c) {
                        if (c.hasOwnProperty(key)) {
                            sections.push( [ key, c[key]["sections"] ] )
                        }
                    }
                }
                )
                return sections;
            }
        }






    }])

    .factory('QuestionFactory', [function ($scope) {
        var questions;

        $.getJSON('data/questions.json', function (response) {
            questions = response;
        });

        return {

            questionText: function (question) {

                return questions[question].text;

                
            },

            answerMachine: function (question, submission) {
                
                var q = questions[question]
                    
                    if (q.type == "SingleAnswer") {
                        if (q.answer == submission) {
                            return [true, q.correct];  
                        } else {
                            return [false, q.incorrect];
                        }
                   }
                    if (q.type == "MultipleChoice") {
                        if (q.choices[submission].solution == "y") {
                            return [true, q.choices[submission].message];
                            
                        } else {
                            return [false, q.choices[submission].message];
                        }
                    }
                    if (q.type == "Range") {
                        if (q.answer == submission) {
                            return [true, q.correct];
                            
                        }
                        else if (q.answer < submission) {                            
                            return [false, q.highmessage];                               
                        }
                        else if (q.answer > submission) {                             
                            return [false, q.lowmessage]; 
                        }
                    }
                return null; // if  no match for q
            }
       }
    }])

    .service('SectionNavigation', [function () {
        
        // &&& this is what we can make a loop

        
        var locations = [
            {
                "id": 1,
                "sections": [
                    {
                        "message": "View Section 1"
                    }, {
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
                    }, {
                        "message": "View Section 3"
                    }, {
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
                    }, {
                        "message": "View Section 3"
                    }, {
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
            navigation: function (chapterID) {

                for (var i = 0; i < 12; i++) {

                    if (chapterID == locations[i].id) {

                        var chapterData = locations[i].sections;
                        console.log(chapterData);
                        return chapterData;

                    }


                }
            }

        }


    }]);

