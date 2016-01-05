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



var populateStates = function (chaptersDict) {
  
  angular.forEach(chaptersDict, function(chapterData, chapterNumber) {
    
    var num = chapterData.sections; // num = number of sections in this chapter
    var base = chapterData.base;
    for (var i=1; i<=num; i++) {
   
      $stateProvider.state(base + "chapter" + chapterNumber + "section" + i,
        {
          url: "/" + base + "chapter" + chapterNumber + "section" + i,
          templateUrl: "templates/" + base + "/" + chapterNumber + "/section" + i + ".html",
          controller: base + "PageCtrl"
        }

        ); 
      
    };
  });
};

$.getJSON("data/chapters.json").then(function (c) {
  populateStates(c);
})
  });