angular.module('app.controllers', [])

  .controller('homeCtrl', function ($scope, $ionicPopup) {

    $scope.showAlert = function () {
      $scope.data = {}
      var alertPopup = $ionicPopup.alert({
        title: '<b>About:</b>',
        templateUrl:'partials/credits.html'
      });
      alertPopup.then(function (res) {
       });
    };
  })

.controller('sambakerChaptersCtrl', function ($scope, SectionNavigation, Chapters, $ionicModal) {

            Chapters.setFilename('data/sambakerChapters.json');

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

            Chapters.setFilename('data/extraChapters.json');

            $scope.chapterTitles = Chapters.getTitles();
            $scope.chapterSections = Chapters.getSections();
            $scope.modalResults = {}
            $scope.modal = {}

            $scope.currentChapterID = {}
            
            // Chapter Clicker Listener
            $scope.chapterClicker = function(chapterID){
              $scope.currentChapterID = chapterID;
              $scope.baseDirectory = "extraChapters";
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
  
    .controller("extraChaptersPageCtrl", function ($scope) {
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
         $scope.qmin = QuestionFactory.rangeMin($scope.qid);
         $scope.step = QuestionFactory.rangeStep($scope.qid);
         $scope.start = ($scope.qmax - ($scope.qmax - $scope.qmin) / 2);
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
      console.log();
      
      // check if 'extra' in footer URL
      // source: http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring
      
      var stringUrl = $location.absUrl()
      // source: http://www.sitepoint.com/javascript-truthy-falsy/
      
      if (~(stringUrl.indexOf('x'))) { // checks if the result of indexOf is 'truthy'
        $scope.baseDirectory = "extraChapters";
      } else {
          $scope.baseDirectory = "sambakerChapters";
      };
      
      $scope.prevEnd = false;
      $scope.nextEnd = true;

      // Figure out the current section number

      $scope.theURLNumber;

      $scope.absUrl = $location.absUrl().slice(-1);

      $scope.absUrlSecond = $location.absUrl().slice(-2);
      $scope.absUrlParsedSecond = parseInt($scope.absUrlSecond);

      if(isNaN($scope.absUrlParsedSecond) == true){
        $scope.theURLNumber = $scope.absUrl;
      } else { 
        $scope.theURLNumber = $scope.absUrlParsedSecond;
      }

      // Get current section number and use it to calculate the next and previous sections
      // These variables are placed in the footer.html file
      $scope.nextSection = parseInt($scope.theURLNumber) + 1;
      $scope.prevSection = parseInt($scope.theURLNumber) - 1;

      $scope.progressBar;

      // Get the entered Chapter ID (<footer sid="..."></footer>) from the footer directive
      // Use the entered Chapter ID to get the number of sections in that chapter from Chapters .factory
      $timeout(function(){
        $scope.chaptID = $scope.sid;
        Chapters.setFilename("data/" + $scope.baseDirectory + ".json")
        $scope.totalSections = parseInt(Chapters.getSectionNumber($scope.sid));

         // progressBar variable is used in footer/html to set the progress bar length. Round to nearest integer.
         $scope.progressBar = Math.round((100 / $scope.totalSections) * parseInt($scope.theURLNumber));
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
          $location.url("/" + $scope.baseDirectory);
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

.controller('ch12Controller', function($scope) {

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

.controller('ch14Controller', function($scope) {
  $scope.demandGraph = "demandGraphDefault";

  $scope.question1 = function() {
    $scope.demandGraph = "demandGraphDrawn";
  };

})

.controller('ch16Controller', function($scope) {
  $scope.demandGraph = "demandGraphDefault";

  $scope.question1 = function() {
    $scope.demandGraph = "demandsupplyGraphDrawn";
  };

  $scope.question3 = function() {
    $scope.quantity0 = 0;
    $scope.quantity1 = 36;
    $scope.quantity2 = 72;
    $scope.quantity3 = 90;
    $scope.quantity4 = 135;
  };

  $scope.question5 = function() {
    $scope.demandGraph = "demandsupplyextraGraphDrawn";
  };

})

.controller('ch8Controller', function($scope) {
  $scope.demandGraph = "demandGraphDefault";

  $scope.question1 = function() {
    $scope.demandGraph = "demandGraphDrawn";
  };

  
  $scope.inputT0 = "Type here";
  $scope.inputT1 = "Type here";
  $scope.inputT2 = "Type here";
  $scope.inputT3 = "Type here";
  $scope.inputT4 = "Type here";
  $scope.inputT5 = "Type here";
  $scope.inputT6 = "Type here";
  $scope.inputT7 = "Type here";
  $scope.inputT8 = "Type here";
  $scope.inputT9 = "Type here";
  $scope.Mon02Ans = "My comments will be here";

  $scope.btnMon020 = function() {
    if ($scope.inputT0 == 0) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 0";
    }
  };
  $scope.btnMon021 = function() {
    if ($scope.inputT1 == 20) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 1";
    }
  };
  $scope.btnMon022 = function() {
    if ($scope.inputT2 == 40) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 2";
    }
  };
  $scope.btnMon023 = function() {
    if ($scope.inputT3 == 60) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 3";
    }
  };
  $scope.btnMon024 = function() {
    if ($scope.inputT4 == 80) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 4";
    }
  };
  $scope.btnMon025 = function() {
    if ($scope.inputT5 == 100) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 5";
    }
  };
  $scope.btnMon026 = function() {
    if ($scope.inputT6 == 120) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 6";
    }
  };
  $scope.btnMon027 = function() {
    if ($scope.inputT7 == 140) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 7";
    }
  };
  $scope.btnMon028 = function() {
    if ($scope.inputT8 == 160) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 8";
    }
  };
  $scope.btnMon029 = function() {
    if ($scope.inputT9 == 180) {
      $scope.Mon02Ans = "Correct! Please do another.";
    } else {
      $scope.Mon02Ans = "Not correct, you want 20 x 9";
    }
  };






  $scope.inputMon04 = "Type here";

  $scope.btnMon04 = function() {

    var MCost = [ 15, 15, 15, 15, 15, 15, 15, 25, 30 ];

    if ($scope.inputMon04 == 7) {
      $scope.ansMon04 = "Correct! 7 is the highest output rate before the marginal cost rises above the marginal revenue.";
    } else if ($scope.inputMon04 < 7) {
      $scope.ansMon04 = $scope.inputMon04 + " doesn't maximise profit. If you increase output to " + (+$scope.inputMon04 + 1) + ", the marginal revenue (£20) is more than the marginal cost (£"+ MCost[$scope.inputMon04] + "). You'll add £" + (20 - MCost[$scope.inputMon04]) + " to your profit if you increase output to " + (+$scope.inputMon04 + 1) + "test is" + test;
    } else if ($scope.inputMon04 > 7) {

      var str = "";
      if ($scope.inputMon04 == 8) {
        str = 25;
      } else {
        str = 30;
      }

      $scope.ansMon04 = "Too high. If you cut your output back to " + (+$scope.inputMon04 - 1) + ", your revenue goes down by £20, but your cost goes down by " + str + ", so your profit is greater at " + (+$scope.inputMon04 - 1);
      
    } else {
      $scope.ansMon04 = "Please input a whole number.";
    }

  };

  $scope.inputMon05 = "Type here";

  $scope.btnMon05 = function() {

    if ($scope.inputMon05 == 60) {
      $scope.ansMon05 = "Correct! If you want to provide 4 visits per hour, and if you want to maximize profit, then you should charge £60. Charge less and you are throwing money away. Charge more and you won't get 4 patients to come in per hour.";
    } else if ($scope.inputMon05 < 60) {
      $scope.ansMon05 = "Too low, if you want to maximise profit. You can charge more than £" + $scope.inputMon05 + " and still get at least 4 patients to come in per hour.";
    } else if ($scope.inputMon05 > 60) {
      $scope.ansMon05 = "Too high. At this price, you won't get 4 patients per hour to come in";
    } else {
      $scope.ansMon05 = "Please input a whole number.";
    }
  };

  $scope.inputMon06 = "Type here";

  $scope.btnMon06 = function() {

    if ($scope.inputMon06 == 50) {
      $scope.ansMon06 = "Correct!  If you want to provide 5 visits per hour, and if you want to maximize profit, then you should charge £50. Charge less and you are throwing money away. Charge more and you won't get 5 patients per hour.";
    } else if ($scope.inputMon06 < 50) {
      $scope.ansMon06 = "Too low, if you want to maximize profit. You can charge more than $" + $scope.inputMon06 + " and still get at least 5 patients to come in per hour.";
    } else if ($scope.inputMon06 > 50) {
      $scope.ansMon06 = "Too high. At this price, you won't get 5 patients per hour to come in";
    } else {
      $scope.ansMon06 = "Please input a whole number.";
    }
  };

});
