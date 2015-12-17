angular.module('app.services', [])

    .factory('Chapters', [function ($scope) {
        /// source http://stackoverflow.com/questions/10775787/function-wait-with-return-until-getjson-is-finished   
        // http://stackoverflow.com/questions/684672/loop-through-javascript-object
        // http://api.jquery.com/each/          
        var chapters;

        $.getJSON('data/chapters.json', function (data) {
            chapters = data;
        });

        function getChapterData() {
            return $.getJSON("data/chapters.json").then(function (data) {
                chapters = data;
                return data;
            });
        }
        return {
            getChapters: function () {

                getChapterData().then(function (returndata) {
                    chapters = returndata;
                })
                return chapters;
            },

            getTitles: function () {
                var titles = [];
                getChapterData().then(function (c) { // c is returned chapter data        
                    for (var key in c) {
                        if (c.hasOwnProperty(key)) {
                            titles.push( [ key, c[key]["name"] ] )
                        }
                    }
                })
                return titles;    
            },

            getSections: function () {
                var sections = {};
                getChapterData().then(function (c) { // c is returned chapter data  
                    for (var key in c) {
                        if (c.hasOwnProperty(key)) {
                            sections[key] = c[key]["sections"]
                        }
                    }
                }
                )
                return sections;
            },

            getSectionNumber: function(theSectionID) {
                return chapters[theSectionID].sections;
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
            questionType: function (question) {
                return questions[question].type;
            },
            questionChoices: function(question) {
                return questions[question].choices;
            },
            rangeMax: function(question) {
                return questions[question].max;
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
                        if (q.choices[submission].solution) {
                            return [true, q.choices[submission].message];                   
                        } else {
                            return [false, q.choices[submission].message];
                        }
                    }
                    if (q.type == "TrueFalse") {
                       if (q.answer == submission) {
                            return [true, q.correct];
                            
                        } else {
                            return [false, q.incorrect];
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
                return [false, "An error occured."] // if  no match for q
            }
       }
    }])

    .service('SectionNavigation', [function ($scope) {

        return {
            navigation: function (chapterID, chapterSections) {
                var chapterData = [];
                // create "View" messages in range of num of sections in chapter
                for (var i = 0; i < chapterSections[chapterID]; i++) {
                    chapterData.push(
                        {
                            "message": "View Section " + (i + 1)
                        }
                        )
                }
                return chapterData;
            }
        }


    }]);

