angular.module('app.controllers', [])

  .controller('homeCtrl', function ($scope, $ionicPopup) {

    $scope.showAlert = function () {
      $scope.data = {}
      var alertPopup = $ionicPopup.alert({
        title: 'About This App',
        template: 'UCL Econ is brought to you by the wonderful folks listed below: <br><br>Dan "Obi-Wan" Sturgess<br>Jason "Indiana" Gwartz<br>Sophie "Lara Croft" Mugridge White<br><br>UCL MSc CS'
      });
      alertPopup.then(function (res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };
  })


  .controller('economicsInteractiveTutorialsCtrl', function ($scope) {

  })
  


   .controller('lesson1Ctrl', function ($scope, QuestionFactory, $ionicPopup) {

      $scope.answer = {
        submission:""
      }

      $scope.returned = {

      }

      $scope.thisAlert = function(questionName) {
        console.log(questionName);
      $scope.data = {}
      $scope.returned = QuestionFactory.questionChecker(questionName, $scope.answer.submission);

      if($scope.returned[0] == true){
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Correct!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap'>"
          + $scope.returned[1] + "</div>",
          
          okText: 'Next Section',
          okType: 'button-balanced'
        });
      }
      else if($scope.returned[0] == false){
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Incorrect!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap'>"
          + $scope.returned[1] + "</div>",
          
          okText: 'Try Again',
          okType: 'button-assertive'
        });
      }
       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
       };
  })



  
  .controller('lesson2Ctrl', function ($scope, $ionicPopup) {
  
    $scope.showCorrect = function (submission) {

      var response = getAnswer(submission);
      // runs the function getAnswer below which will
      // return a 2-element array of [boolean, stringMessage]
      if (response[0]) {
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Correct!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap'>"
    + response[1] + "</div>",
          
          okText: 'Next Section',
          okType: 'button-balanced'
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Incorrect!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap'>"
    + response[1] + "</div>",
          okText: 'Try Again',
          okType: 'button-assertive'
        }
          );
      };
    }
  }
)

.controller('DashCtrl', function($scope) {
  
  var deploy = new Ionic.Deploy();
  
  // Update app code with new release from Ionic Deploy
  $scope.doUpdate = function() {
    deploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    deploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  }
})

;

function getAnswer(s) {
  // modify this to run answer lookup code
  if (s.length > 5) {
    var a = [true, "Sam Baker approves!"];
  } else {
    var a = [false, "Sam Baker is dissapointed..."]
  }
  
  return a;
}