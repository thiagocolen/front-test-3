(function () {
  'use strict';

  angular
    .module('myApp.services', [])
    .service('Services', Services);

  Services.$inject = ['$http']

  function Services($http) {

    console.log('Services');

    return {
      getContent: getContent
    };

    function getContent() {
      return $http.get('https://api.myjson.com/bins/a56hd')
        .then(function (response) {
          return response.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

})();