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
    console.log('homeController');

    var vm = this;
    vm.title = 'Some Title';
    Services.getContent().then(function (response) {
      vm.content = response;
    });

    // $scope.$watch('vm.title', function (current, original) {
    //   $log.info('vm.title was %s', original);
    //   $log.info('vm.title is now %s', current);
    // });

  }

})();