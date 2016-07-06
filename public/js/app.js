var App = angular.module('App', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "public/js/templates/home.html",
      controller: "AppController"
    })
    .state('test', {
      url: "/test",
      templateUrl: "public/js/templates/test.html",
      controller: "TestController"
    });
});