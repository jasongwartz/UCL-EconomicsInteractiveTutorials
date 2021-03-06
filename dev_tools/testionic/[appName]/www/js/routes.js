angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('economicsInteractiveTutorials', {
      url: '/page1',
      templateUrl: 'templates/economicsInteractiveTutorials.html',
      controller: 'economicsInteractiveTutorialsCtrl'
    })
        
      
    
      
        
    .state('lesson1', {
      url: '/lesson1',
      templateUrl: 'templates/lesson1.html',
      controller: 'lesson1Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});