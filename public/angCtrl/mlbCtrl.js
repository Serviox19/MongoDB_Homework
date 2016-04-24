var mlbCtrl = angular.module('mlbCtrl', ['ngAnimate']);

mlbCtrl.controller('', ['$scope', '$http', function($scope, $http) {
  $scope.articles = [];

  $http.get('/baseball').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i]);
      $scope.articles.push(data[i]);
    };
  });
}]);
