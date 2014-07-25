// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('coffeeCalculator', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('mainCtrl', ['$scope', function($scope){

    $scope.valores = [];

    $scope.calculate = function(){
      $scope.valores.push = {};
      $scope.valores.beanQty = Math.round($scope.valores.ounces * 1.2083333).toFixed(2);
      $scope.valores.waterQty = Math.round($scope.valores.beanQty * 16.4285714).toFixed(2);
      $scope.valores.firstPour = ($scope.valores.beanQty * 2).toFixed(2);
      $scope.valores.secondPour = ($scope.valores.waterQty - $scope.valores.firstPour).toFixed(2);

      console.log($scope.valores.ounces);

    };

    $scope.class = "red";

    $scope.changeClass = function(){
      if($scope.class === 'red'){
        $scope.class = 'blue';
      } else {
        $scope.class = "red";
      }
    };

}]);
