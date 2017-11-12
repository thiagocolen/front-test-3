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


  function HomeCtrl($scope, $log, Services, $location) {
    var vm = this;
    vm.goto = goto;

    Services.getContent().then(function (response) {
      vm.content = response;
    });

    $('#tablist a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });

    
    function goto(id) {
      $location.path('/news/' + id);
    }
  }

})();