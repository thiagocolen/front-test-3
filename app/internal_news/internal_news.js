(function () {
  'use strict';

  angular
    .module('myApp.internalNews', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/news/:newsId', {
        templateUrl: 'internal_news/internal_news.html',
        controller: 'internalNewsCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('internalNewsCtrl', internalNewsCtrl);


  function internalNewsCtrl($scope, $log, $routeParams, Services) {
    var vm = this;

    
    Services.getContent().then(function (response) {
      vm.content = response[$routeParams.newsId-1];
    });

    $('#tablist a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  }

})();