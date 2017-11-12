(function () {
  'use strict';

  angular
    .module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('HomeCtrl', HomeCtrl);


  function HomeCtrl($scope, $log, Services) {
    var vm = this;

    Services.getContent().then(function (response) {
      vm.content = response;
    });

    $('#tablist a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  }

})();