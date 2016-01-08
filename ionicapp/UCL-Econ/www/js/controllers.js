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

.controller('ch3Controller', function($scope) {
  $scope.inputACost12 = "Type here";
  $scope.ansACost12 = "My comments will be here.";
  $scope.btnACost12 = function() {
    if ($scope.inputACost12 == 8) {
      $scope.ansACost12 = "Correct! 8 is the largest number of patients for which average cost is less than £3200. Notice that this top end is now lower it was before.It's 8, rather than 9.";
    } else {
      if (($scope.inputACost12 > 4) && ($scope.inputACost12 <= 8)) {
        $scope.ansACost12 = "True, Joan's does make a profit serving " + $scope.inputACost12 + " patients. But Joan's can also make a profit at a higher rate of output. Here you're being asked for the highest output rate at which Joan's does not lose money, when the price is £3200";
      } else {
        $scope.ansACost12 = "Joan's average cost exceeds £3200 when she serves " + $scope.inputACost12 + " per year.";
      }
    }
  };

  $scope.inputACost13 = "Type here";
  $scope.ansACost13 = "My comments will be here.";
  $scope.btnACost13 = function() {
    if (($scope.inputACost13 >= 2917) && ($scope.inputACost13 < 3000)) {
      $scope.ansACost13 = "Correct! For any price from £2917 up to £3000, output rates of 5 and 6, and only those, are profitable or break even. Joan's output decision is narrowly constrained if the price is in this £2917-£3000 range.";
    } else {
      if ($scope.inputACost13 < 2900) {
        $scope.ansACost13 = "Too low. No output rates break even at this price.";
      } else if ($scope.inputACost13 < 2917) {
        $scope.ansACost13 = "Too low. The output rate of 6 is not profitable at this price.";
      }
      if ($scope.inputACost13 == 3000) {
        $scope.ansACost13 = "Too high. The output rate of 7 breaks even at this price.";
      }
      if ($scope.inputACost13 > 3000) {
        $scope.ansACost13 = "Too high. The output rate of 7 is also profitable at this price.";
      }
    }
  }

  $scope.inputACost14 = "Type here";
  $scope.ansACost14 = "My comments will be here.";
  $scope.btnACost14 = function() {
    if ($scope.inputACost14 == 2900) {
      $scope.ansACost14 = "Correct! At this price, Joan's has no choice but to see 5 patients per year, and the firm just breaks even.";
    } else {

      if ($scope.inputACost14 < 2900) {
        $scope.ansACost14 = "Too low. No output rates break even at this price.";
      } else {
        $scope.ansACost14 = "Too high to be the lowest price. Joan's does make some profit greater than £0 at this price, if the firm treats 5 patients per year.";
      }
    }
  }

  $scope.inputACost16 = "Type here";
  $scope.ansACost16 = "My comments will be here.";
  $scope.btnACost16 = function() {
    if (($scope.inputACost16 < 0) || ($scope.inputACost16 > 9)) {
      $scope.ansACost16 = "Your answer has to be a plain number between 0 and 9. Please edit and try again";
    }
    if ($scope.inputACost16 == 0) {
      $scope.ansACost16 = "Not 0. Please use the marginal decision rule and the figures in the marginal cost row. Please try again.";
    } else if ($scope.inputACost16 == 8) {
      $scope.ansACost16 = "Correct! With these lower costs, Joan's makes the most profit at an output rate of 8. It's the highest output rate before the marginal cost gets higher than £2900";
    } else {
      if (($scope.inputACost16 > 0) && ($scope.inputACost16 < 8)){
        $scope.ansACost16 = "Not the best profit. Joan's does better at " + (+$scope.inputACost16 + 1) + " than at " + $scope.inputACost16 + ". Please try again.";
      } else {
        $scope.ansACost16 = "Joan's loses money at 9.";
      }
    }
  }

  $scope.inputACost18 = "Type here";
  $scope.ansACost18 = "My comments will be here.";
  $scope.btnACost18 = function() {
    if (($scope.inputACost18 < 0) || ($scope.inputACost18 > 9)) {
      $scope.ansACost18 = "Your answer has to be a plain number between 0 and 9. Please edit and try again";
    }
    if ($scope.inputACost18 == 5) {
      $scope.ansACost18 = "Correct! 5 is the smallest number of patients for which average cost is less than £2900. Joan's break even point is higher than it was at the old price and the old technology, which had less fixed cost.";
    } else {

      if ($scope.inputACost18 > 5) {
        $scope.ansACost18 = "True, Joan's does make a profit serving " + $scope.inputACost18 + " patients. But Joan's can also make a profit at a lower rate of output. Compare the average cost to the price.";
      } else {
        $scope.ansACost18 = "Joan's average cost exceeds £2900 when she serves " + $scope.inputACost18 + " per year.";
      }
    }
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

  $scope.ansMon02 = "My comments will be here";
  $scope.btnMon02xx = function(input, boxNum) {
    if (input == (boxNum * 20)) {
      $scope.ansMon02 = "Correct! Please do another.";
    } else {
      $scope.ansMon02 = "Not correct, you want 20 x " + boxNum;
    }
  };

  $scope.ansMon03 = "My comments will be here";
  $scope.btnMon03xx = function(input, boxNum) {
    if (input == (20)) {
      $scope.ansMon03 = "Correct! Please do another.";
    } else {
      $scope.ansMon03 = "Not correct, you want  " + (20 * boxNum) + " - " + (20 * boxNum - 20);
    }
  };

  $scope.ansMon07 = "My comments will be here";
  $scope.btnMon07xx = function(input, boxNum) {
    if (input == (boxNum * (100 - boxNum * 10))) {
      $scope.ansMon07 = "Correct! Please do another.";
    } else {
      $scope.ansMon07 = "Not correct, you want  " + (100 - boxNum * 10) + " times " + boxNum;
    }
  };





  $scope.inputMon04 = "Type here";

  $scope.btnMon04 = function() {

    var MCost = [ 15, 15, 15, 15, 15, 15, 15, 25, 30 ];

    if ($scope.inputMon04 == 7) {
      $scope.ansMon04 = "Correct! 7 is the highest output rate before the marginal cost rises above the marginal revenue.";
    } else if ($scope.inputMon04 < 7) {
      $scope.ansMon04 = $scope.inputMon04 + " doesn't maximise profit. If you increase output to " + (+$scope.inputMon04 + 1) + ", the marginal revenue (£20) is more than the marginal cost (£"+ MCost[$scope.inputMon04] + "). You'll add £" + (20 - MCost[$scope.inputMon04]) + " to your profit if you increase output to " + (+$scope.inputMon04 + 1);
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

  var MRev = [ 1000, 90, 70, 50, 30, 10, -10, -30, -50, -70 ];
  var MCost = [ 1000, 15, 15, 15, 15, 15, 15, 15, 25, 30 ];
  $scope.inputMon12 = "Type here";
  $scope.ansMon12 = "My comments will be here.";
  $scope.btnMon12 = function() {
    if (($scope.inputMon12 < 0) || ($scope.inputMon12 > 9)) {
      $scope.ansMon12 = "Please input a number between 0 and 9."
    }
    if ($scope.inputMon12 == 4) {
      $scope.ansMon12 = "Correct! 4 is the highest output rate before the marginal cost rises above the marginal revenue.";
    } else {

      if ($scope.inputMon12 < 4) {
        $scope.ansMon12 = "Too low. If you want to maximize profit. If you increase output to " + (+$scope.inputMon12 + 1) + ", the marginal cost (£" + MCost[+$scope.inputMon12 + 1] + ") is less than the marginal revenue (£" + MRev[+$scope.inputMon12 + 1] + "). You'll add £" + (MRev[+$scope.inputMon12 + 1] - MCost[+$scope.inputMon12 + 1]) + " to your profit.";
      }
      if ($scope.inputMon12 > 4) {
        $scope.ansMon12 = "Too high. If you cut your output back to " + (+$scope.inputMon12 - 1) + ", your revenue goes down by £" +  MRev[+$scope.inputMon12] + ", but your cost goes down by £" + MCost[+$scope.inputMon12] + ", so your profit is greater.";
      }
      if ($scope.inputMon12 > 5) {
        $scope.ansMon12 = "Way too high. Marginal revenue is negative. If you cut your output back to " + (+$scope.inputMon12 - 1) + ", your revenue goes up by £" +  -MRev[+$scope.inputMon12] + ", and your cost goes down by £" + MCost[+$scope.inputMon12] + ", so your profit is greater.";
      }


    }

  }

});
