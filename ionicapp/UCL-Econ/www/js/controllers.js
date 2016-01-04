angular.module('app.controllers', [])

  .controller('homeCtrl', function ($scope, $ionicPopup) {

    $scope.showAlert = function () {
      $scope.data = {}
      var alertPopup = $ionicPopup.alert({
        title: '<b>About:</b>',
        template: '<b>UCL Interactive Economics Tutorials</b> is brought to you by: <br><br><b>UCL Institute of Global Health</b><br><br><b>UCL MSc Computer Science</b><br>Dan Sturgess<br>Jason Gwartz<br>Sophie Mugridge White<br><br>Special thanks to <b>Sam Baker</b> for use of his economics content.'
      });
      alertPopup.then(function (res) {
       });
    };
  })

.controller('sambakerChaptersCtrl', function ($scope, SectionNavigation, Chapters, $ionicModal) {

            $scope.chapterTitles = Chapters.getTitles();
            $scope.chapterSections = Chapters.getSections();
            $scope.modalResults = {}
            $scope.modal = {}

            $scope.currentChapterID = {}
            
            // Chapter Clicker Listener
            $scope.chapterClicker = function(chapterID){
              $scope.currentChapterID = chapterID;
              $scope.baseDirectory = "sambakerChapters";
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
  
  
  
.controller('extraChaptersCtrl', function ($scope, SectionNavigation, Chapters, $ionicModal) {

            $scope.chapterTitles = Chapters.getTitles();
            $scope.chapterSections = Chapters.getSections();
            $scope.modalResults = {}
            $scope.modal = {}

            $scope.currentChapterID = {}
            
            // Chapter Clicker Listener
            $scope.chapterClicker = function(chapterID){
              $scope.currentChapterID = chapterID;
              $scope.baseDirectory = "sambakerChapters";
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
  
  
  
  .controller("sambakerChaptersPageCtrl", function ($scope) {
    //$scope.baseDirectory = "sambakerChapters";
  })
  
  .controller("QuestionController", function ($scope, $timeout, QuestionFactory, Chapters, $ionicPopup, $location) {

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
       });
       };
      

})
      

    .controller("FooterController", function($scope, $timeout, QuestionFactory, Chapters, $ionicPopup, $location) {
      
       // Start the footer stuff -->

      // Footer nav ng hide variables for section navigtion
      $scope.baseDirectory = "sambakerChapters"; // GET THIS WORKING DYNAMICALLY &&&
      $scope.prevEnd = false;
      $scope.nextEnd = true;

      // Get the last character of the URL - basically the current section number
      $scope.absUrl = $location.absUrl().slice(-1);

      // Get current section number and use it to calculate the next and previous sections
      // These variables are placed in the footer.html file
      $scope.nextSection = parseInt($scope.absUrl) + 1;
      $scope.prevSection = parseInt($scope.absUrl) - 1;
      $scope.progressBar;

      // Get the entered Chapter ID (<footer sid="..."></footer>) from the footer directive
      // Use the entered Chapter ID to get the number of sections in that chapter from Chapters .factory
      $timeout(function(){
        $scope.chaptID = $scope.sid;
         $scope.totalSections = parseInt(Chapters.getSectionNumber($scope.sid));

         // progressBar variable is used in footer/html to set the progress bar length. Round to nearest integer.
         $scope.progressBar = Math.round((100 / $scope.totalSections) * parseInt($scope.absUrl));
      });

      // Hide previous section arrow in footer when in section 1
      if($scope.prevSection < 1){
        $scope.prevEnd = true;
      } else {
        $scope.prevEnd = false;
      }

      // When the user hits the tick icon in the footer to navigate beyond the final section, show this :)
      $scope.completeSection = function () {
        var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-calm'><h1 class='title'>Congratulations!</h1></div>",
          template: "<br>" +
          "<div class='card has-header'><div class='item item-text-wrap' style='text-align:center;'><div class='row centerIcons expandUp'><i class='ion-ios-checkmark-outline balanced'></i></div><div class='row'>You've completed Chapter " + $scope.chaptID + "</div></div>",
          okText: 'Chapter Overview',
          okType: 'button-balanced'
        });
        alertPopup.then(function() {
          $location.url("/sambaker");
        })
      };
      
      // End the footer stuff    
      
    }
    
    )


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

.controller('ch13Controller', function($scope) {

  $scope.spin1 = function() {
    var outcome = Math.floor(Math.random()*38);   
    var win = 0;
    var loss = 0;
    
    if (outcome === 37) {
      outcome = 0;
      $scope.num = "00";
    } else {
      $scope.num = outcome;
    }
    
    if (outcome % 2 === 1) {
      win++;
    } else {
      loss++;
    }
    
    $scope.win = win;
    $scope.loss = loss;
    $scope.net = win - loss;
    $scope.bets = win + loss;
    $scope.ratio = (win - loss)/(win + loss);
  };
  
  $scope.spin10 = function() {
    var win = 0;
    var loss = 0;
    var outcome = 0;
    
    for (var i = 0; i < 10; i++) {
      outcome = Math.floor(Math.random()*38);
      if (outcome === 37) {
        outcome = 0;
        $scope.num = "00";
      } else {
        $scope.num = outcome;
      }
      
      if (outcome % 2 === 1) {
        win++;
      } else {
        loss++;
      }
      
    }
    
    $scope.win = win;
    $scope.loss = loss;
    $scope.net = win - loss;
    $scope.bets = win + loss;
    $scope.ratio = (win - loss)/(win + loss);
  };
  
  $scope.spin1000 = function() {
    var win = 0;
    var loss = 0;
    var outcome = 0;
    
    for (var i = 0; i < 1000; i++) {
      outcome = Math.floor(Math.random()*38);
      if (outcome === 37) {
        outcome = 38;
      }
      
      if (outcome % 2 === 1) {
    win++;
    } else {
    loss++;
    }
    }
    
    if (outcome === 38) {
      $scope.num = "00";
    } else {
      $scope.num = outcome;
    }
   
    $scope.win = win;
    $scope.loss = loss;
    $scope.net = win - loss;
    $scope.bets = win + loss;
    $scope.ratio = (win - loss)/(win + loss);
    
  };
  
  $scope.spin1000000 = function() {
    var win = 0;
    var loss = 0;
    var outcome = 0;
    
    for (var i = 0; i < 1000000; i++) {
      outcome = Math.floor(Math.random()*38);
    if (outcome === 37) { 
    outcome = 38;
    }
    if (outcome % 2 === 1) {
    win++;
    } else {
    loss++;
    }
    }
    
    if (outcome === 38) {
      $scope.num = "00";
    } else {
      $scope.num = outcome;
    }

    $scope.win = win;
    $scope.loss = loss;
    $scope.net = win - loss;
    $scope.bets = win + loss;
    $scope.ratio = (win - loss)/(win + loss);
  };

  $scope.box1 = "Type here";
  $scope.box2 = "Type here";
  $scope.risk2 = function() {
  
    if ($scope.box1 == 0.9) {
      $scope.box1answeru = "Correct! Upper box should be 0.9.";
    } else {
      $scope.box1answeru = "The probability that the bond will pay goes in the upper box. Use a decimal, not a percentage.";
    }

    if ($scope.box2 == 0.1) {
      $scope.box2answeru = "Correct! 0.1 goes in the lower box.";
    } else {
      $scope.box2answeru = "The probability that the bond will default goes in the lower box. Use a decimal, not a percentage.";
    }

    if (($scope.box1 == "0.9") && ($scope.box2 == "0.1")) {
      $scope.both0 = "Payoff x Probability";
      $scope.both1 = "£8823.53";
      $scope.both2 = "£0.00";
      $scope.both = "The expected present value of this bill is £8823.53. (£8823.53+£0.00=£8823.53) That is also the price for which the bill should sell.";
    }



  };

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