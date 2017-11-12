(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.news',
    'myApp.internalNews',
    'myApp.version',
    'myApp.services'
  ]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      // $routeProvider.otherwise({ redirectTo: '/home' });
    }]);

})();