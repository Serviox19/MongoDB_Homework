var app = angular.module('sportsApp', ['ui.router', 'nbaCtrl', 'nflCtrl', 'mlbCtrl']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: ""
    })
    .state('basketball', {
      url: "/nba",
      templateUrl: "partials/nba.html",
      controller: ""
    })
    .state('football', {
      url: "/nfl",
      templateUrl: "partials/nfl.html",
      controller: ""
    })
    .state('baseball', {
      url: "/mlb",
      templateUrl: "partials/mlb.html",
      controller: ""
    });
});
