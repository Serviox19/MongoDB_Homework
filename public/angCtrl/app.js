var app = angular.module('sportsApp', ['ui.router', 'nbaCtrl', 'nflCtrl', 'mlbCtrl']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: ""
    })
    .state('basket', {
      url: "/nba",
      templateUrl: "partials/nba.html",
      controller: ""
    })
    .state('foot', {
      url: "/nfl",
      templateUrl: "partials/nfl.html",
      controller: ""
    })
    .state('base', {
      url: "/mlb",
      templateUrl: "partials/mlb.html",
      controller: ""
    });
});
