angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {



  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
    .state('economicsInteractiveTutorials', {
      url: '/sambaker',
      templateUrl: 'templates/economicsInteractiveTutorials.html',
      controller: 'economicsInteractiveTutorialsCtrl'
    })

    .state('lesson1', {
      url: '/lesson1',
      templateUrl: 'templates/lesson1.html',
      controller: 'lesson1Ctrl'
    })
        
      .state('lesson2', {
      url: '/lesson2',
      templateUrl: 'templates/lesson2.html',
      controller: 'lesson2Ctrl'
    })
       
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

    
// get this from the FACTORY also!
var lengthsDict = [
    // [chapterNumber,sectionCount]
    ["1",2],
    ["2",6],
    ["3",5],
    ["4",5],
    ["5",5],
    ["6",5],
    ["7",7],
    ["8",12],
    ["9",10],
    ["10",14],
    ["11",9],
    ["12",8],
    ["13",8]
]



var populateStates = function () {
  angular.forEach(lengthsDict, function(chapterArray) {
    
 
    var chapter = chapterArray[0];
    var num = chapterArray[1]; // num = number of sections in this chapter
    
    for (var i=1; i<=num; i++) {
      $stateProvider.state("chapter" + chapter + "section" + i,

        {
          url: "/chapter" + chapter + "section" + i,
          templateUrl: "templates/chapters/" + chapter + "/section" + i + ".html",
          controller: "lesson1Ctrl"
          //function($scope) {
            //  $scope.items = ["a"];
          // "chapter" + chapter + "section" + i + "Ctrl"
        }

        );
      
    };
   
  });
};


populateStates();



});