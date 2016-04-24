var nflCtrl = angular.module('nflCtrl', ['ngAnimate']);

nflCtrl.controller('nflNews', ['$scope', '$http', function($scope, $http) {
  $scope.articles = [];

  $http.get('/football').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i]);
      $scope.articles.push(data[i]);
    };
  });
}]);
