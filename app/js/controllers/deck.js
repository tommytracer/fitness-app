'use strict';

angular.module('myApp')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/deck.html',
      controller: 'DeckCtrl'
    });
  })
  .controller('DeckCtrl', function ($scope, $timeout, $window) {

    $scope.deck = {};
    $scope.deck.showPhoto = false;
    $scope.deck.foo = "Larry";
    $scope.deck.isIos =  !!$window.navigator.platform.match(/iPhone|iPod|iPad/);

    var video = $('video')[0];

    //$scope.platform = 'android';

    $scope.slides = [
      'partials/running-challenge.html',
      'partials/go-out.html',
      'partials/do-a-little.html',
      'partials/as-little-as.html',
      'partials/increase-the-amount.html',
      'partials/form.html'
    ];

    $scope.fullpageOptions = {
      scrollOverflow: true,

      onLeave: function (index, nextIndex, direction) {

        if($scope.deck.isIos) return;

        if ((index === 1 && direction === 'down') || (index === 6 && direction === 'up')) {
          video.play();
        }
        if ((index === 5 && direction === 'down') || (index === 2 && direction === 'up')) {
          video.pause();
        }
      }
    };

    $timeout(function () {
      $scope.deck.showPhoto = true;
    }, 1000);

  });
