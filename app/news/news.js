(function () {
  'use strict';

  angular
    .module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/news', {
        templateUrl: 'news/news.html',
        controller: 'newsCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('newsCtrl', newsCtrl);


  function newsCtrl($scope, $log, $routeParams, Services) {
    var vm = this;
    vm.filterOptions = ['par', 'impar', 'todos']
    vm.activefilter = vm.filterOptions[2];
    vm.loadNews = loadNews;

    vm.loadNews();

    function loadNews () {
      Services.getContent().then(function (response) {
        vm.content = [];
  
        if (vm.activefilter === 'todos') {
          vm.content = response;
        }
  
        if (vm.activefilter === 'par') {
          response.forEach(function (element) {
            if (element.id % 2 === 0) {
              return vm.content.push(element);
            }
          });
        }
        
        if (vm.activefilter === 'impar') {
          response.forEach(function (element) {
            if (element.id % 2 === 1) {
              return vm.content.push(element);
            }
          });
        }
        
      });

    }


  }

})();