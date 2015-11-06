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

  .controller('lesson1Ctrl', function ($scope) {

  })

  .controller('lesson2Ctrl', function ($scope, $ionicPopup) {
  
    $scope.showCorrect = function (submission) {

      var response = getAnswer(submission);
      // runs the function getAnswer below which will
      // return a 2-element array of [boolean, stringMessage]
      if (response[0]) {
        var alertPopup = $ionicPopup.alert({
          title: "Correct!",
          template: response[1]
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: "Incorrect!",
          template: response[1]
        }
          );
      };
    }
  }
);

function getAnswer(s) {
  // modify this to run answer lookup code
  if (s.length > 5) {
    var a = [true, "Sam Baker approves!"];
  } else {
    var a = [false, "Sam Baker is dissapointed..."]
  }
  
  return a;
}