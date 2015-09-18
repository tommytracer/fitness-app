'use strict';

angular.module('myApp')
  .controller('FormCtrl', function ($scope, $timeout, $location, ParseService, EarlyAccessItem, $window) {

    $scope.emailButtonText = 'Sign me up';
    $scope.requiredGender = $scope.requiredAge = $scope.requiredDescribe = '';
    $scope.genderState = $scope.ageState = $scope.describeState = '';
    $scope.showTryButton = false;
    $scope.showAppGroup = false;
    $scope.showEmailGroup = false;
    $scope.showFormGroup = false;
    $scope.showAgeGroup = false;
    $scope.showHabitGroup = true;
    $scope.showLeft = true;
    $scope.showRight = true;
    $scope.showNextBtn = true;

    $scope.slideCount = 0;

    $scope.slideList = [
      {id:'appGroup', showId:$scope.showAppGroup},
      {id:'emailGroup', showId:$scope.showEmailGroup},
      {id:'formGroup', showId:$scope.showFormGroup},
      {id:'ageGroup', showId:$scope.showAgeGroup},
      {id:'habitGroup', showId:$scope.showHabitGroup}
    ];

    var innvalidMessage = 'required';

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        html: '<div><h1>Hello There</h1></div>',
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }

    $scope.model = {
      userAgent: $window.navigator.userAgent,
      email: null,
      gender: null,
      ageGroup: null,
      habitGroup: {
        iDontRun: false,
        iHateRunning: false,
        iWalkRegularly: false,
        iRunRegularly: false,
        iTriedRunningButGaveUp: false,
        iLikeDoingRunningEvents: false,
        imTrainingForAnEvent: false,
        imReturningFromAnInjury: false
      },
      platform: $scope.platform
    };

    $scope.submit = function () {

      var valid = true;

      if(!$scope.model.gender) {
        valid = false;
        $scope.requiredGender = innvalidMessage;
        $scope.genderState = 'fail';
      } else if(!$scope.model.ageGroup) {
        valid = false;
        $scope.requiredAge = innvalidMessage;
        $scope.ageState = 'fail';
      }

      var selected = false;
      for(var key in $scope.model.habitGroup) {
        if($scope.model.habitGroup[key]) {
          selected = true;
        }
      }

      if(!selected) {
        valid = false;
        $scope.requiredDescribe = innvalidMessage;
        $scope.describeState = 'fail';
      }

      if(!valid) return;

      var object = new EarlyAccessItem();

      object.save($scope.model, {
        success: function (object) {
          $timeout(function () {
            $location.path('/thanks');
          });
        },
        error: function (object, error) {

          if(error.message && error.message === 'EMAIL_EXISTS') {
            $scope.emailButtonText = 'Email already exists';
          }

          $scope.$apply();

        }
      });
    };

    $scope.resetGender = function() {
      $scope.requiredGender = '';
      $scope.genderState = '';
    };
    $scope.resetAge = function() {
      $scope.requiredAge = '';
      $scope.ageState = '';
    };
    $scope.resetDescribe = function() {
      $scope.requiredDescribe = '';
      $scope.describeState = '';
    };

    $scope.prevClick = function() {
      if($scope.slideCount >0) {
        $scope.slideCount --;
      }
    };

    $scope.nextClick = function() {
      //ToDo
    };

    $scope.showNextClick = function() {
      //ToDo
    };
  });
