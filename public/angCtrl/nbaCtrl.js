var nbaCtrl = angular.module('nbaCtrl', ['ngAnimate']);

nbaCtrl.controller('nbaNews', ['$scope', '$http', function($scope, $http) {
  $scope.articles = [];

  $http.get('/basketball').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i]);
      $scope.articles.push(data[i]);
    };
  });
}]);
