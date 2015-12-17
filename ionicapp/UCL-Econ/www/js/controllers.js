angular.module('app.controllers', [])

  .controller('homeCtrl', function ($scope, $ionicPopup) {

    $scope.showAlert = function () {
      $scope.data = {}
      var alertPopup = $ionicPopup.alert({
        title: '<b>About:</b>',
        template: '<b>UCL Interactive Economics Tutorials</b> is brought to you by: <br><br><b>UCL Institute of Global Health</b><br><br><b>UCL MSc CS</b><br>Dan Sturgess<br>Jason Gwartz<br>Sophie Mugridge White<br><br>Special thanks to <b>Sam Baker</b> for use of his economics content.'
      });
      alertPopup.then(function (res) {});
    };
  })

.controller('economicsInteractiveTutorialsCtrl', function ($scope, SectionNavigation, Chapters, $ionicModal) {
            
            $scope.chapterTitles = Chapters.getTitles();
            $scope.chapterSections = Chapters.getSections();
            $scope.modalResults = {}

            $scope.modal = {}

            $scope.currentChapterID = {}
            
            // Chapter Clicker Listener
            $scope.chapterClicker = function(chapterID){
              $scope.currentChapterID = chapterID;
              $scope.modalResults = SectionNavigation.navigation(chapterID, $scope.chapterSections);

              $scope.modal.show();

            }

            // Modal Pop Up
            $ionicModal.fromTemplateUrl('templates/modal.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.modal = modal;
            });
            $scope.openModal = function() {
              $scope.modal.show();
            };
            $scope.closeModal = function() {
              $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
              // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
              // Execute action
            });

           
           
     
  })
  
  
  .controller("QuestionController", function ($scope, $timeout, QuestionFactory, $ionicPopup) {
      $timeout(function(){
       $scope.name = $scope.qid;
       $scope.text = QuestionFactory.questionText($scope.qid);
       $scope.type = QuestionFactory.questionType($scope.qid);
       if ($scope.type === "MultipleChoice") {
         $scope.choices = QuestionFactory.questionChoices($scope.qid);
       }
       if ($scope.type === "Range") {
         $scope.qmax = QuestionFactory.rangeMax($scope.qid);
         $scope.start = ($scope.qmax / 2);
       }
       
      });
      
      $scope.answer = {
        submission:""
      }
      
      $scope.thisAlert = function(questionName, submission) {

          $scope.returned = QuestionFactory.answerMachine(questionName, submission);
   
      if($scope.returned[0] == true){
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Correct!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap'>"
          + $scope.returned[1] + "</div>",
          
          okText: 'OK',
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


   .controller('lesson1Ctrl', function ($scope, QuestionFactory, $ionicPopup) {

   })
  //     $scope.answer = {
  //       submission:""
  //     }
      
  //     $scope.thisAlert = function(questionName, submission) {

  //       console.log("RAN")
  //     $scope.returned = QuestionFactory.questionChecker(questionName, submission);

  //     console.log($scope.returned)
      
  //     if($scope.returned[0] == true){
  //       var alertPopup = $ionicPopup.alert({
  //         title: "<div class='bar bar-calm'><h1 class='title'>Correct!</h1></div>",
  //         template: "<br>" +
  //         "<div class='card has-header'><div class='item item-text-wrap'>"
  //         + $scope.returned[1] + "</div>",
          
  //         okText: 'Next Section',
  //         okType: 'button-balanced'
  //       });
  //     }
  //     else if($scope.returned[0] == false){
  //       var alertPopup = $ionicPopup.alert({
  //         title: "<div class='bar bar-calm'><h1 class='title'>Incorrect!</h1></div>",
  //         template: "<br>" +
  //         "<div class='card has-header'><div class='item item-text-wrap'>"
  //         + $scope.returned[1] + "</div>",
          
  //         okText: 'Try Again',
  //         okType: 'button-assertive'
  //       });
  //     }
  //      alertPopup.then(function(res) {
  //        console.log('Thank you for not eating my delicious ice cream cone');
  //      });
  //      };
  // })



  
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