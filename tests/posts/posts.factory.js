(function() {
  'use strict';

  angular.module('postsModule', [])
  .factory('postsFactory', function($http) {  // Add $http dependency
    var API = 'http://jsonplaceholder.typicode.com/posts';
    var factObj = {};

    // Spy on this method chained with callThrough() allows it to continue to continue to $http.get()
    factObj.getAllPosts = function() {
      return $http.get(API)
      .then(function(res) {
        return res.data;
      });
    };

    return factObj;
  });
})();