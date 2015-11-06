angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $ionicPopup) {

  $scope.showAlert = function() {
    $scope.data = {}
   var alertPopup = $ionicPopup.alert({
     title: 'About This App',
     template: 'UCL Econ is brought to you by the wonderful folks listed below: <br><br>Dan "Obi-Wan" Sturgess<br>Jason "Indiana" Gwartz<br>Sophie "Lara Croft" Mugridge White<br><br>UCL MSc CS'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
})


.controller('economicsInteractiveTutorialsCtrl', function($scope) {

})
   
.controller('lesson1Ctrl', function($scope) {

})
