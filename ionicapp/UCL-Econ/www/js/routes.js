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
        
    .state('sambakerChapters', {
      url: '/sambaker',
      templateUrl: 'templates/sambakerChapters.html',
      controller: 'sambakerChaptersCtrl'
    })
    
    .state('extraChapters', {
      url: '/extraChapters',
      templateUrl: 'templates/extraChapters.html',
      controller: 'extraChaptersCtrl'
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

var uclLengthsDict = [
    // [chapterNumber,sectionCount]
    ["1",4],
    ["2",7],
    ["3",8]
]


var populateStates = function (chaptersDict, baseString) {
  angular.forEach(chaptersDict, function(chapterArray) {
    
 
    var chapter = chapterArray[0];
    var num = chapterArray[1]; // num = number of sections in this chapter
    
    for (var i=1; i<=num; i++) {
      $stateProvider.state(baseString + "chapter" + chapter + "section" + i,
        {
          url: "/" + baseString + "chapter" + chapter + "section" + i,
          templateUrl: "templates/" + baseString + "/" + chapter + "/section" + i + ".html",
          controller: baseString + "PageCtrl"
        }

        ); 
    };
  });
};


populateStates(lengthsDict, "sambakerChapters");
populateStates(uclLengthsDict, "extraChapters");



});