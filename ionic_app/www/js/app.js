angular.module('app', ['ionic', 'ionic.service.core', 'ionic.service.analytics', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

    .run(function ($ionicPlatform, $ionicAnalytics) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
    
            // Register for analytics
            $ionicAnalytics.register();

        });
    })
