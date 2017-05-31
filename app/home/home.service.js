(function() {
    console.log("posts service is loaded::::");
    angular.module("dustbinApp").factory("postsFactory", function($http, $q) {

       
       
        var myService = {};

        myService.getPosts = function() {

            return   $http.get('http://jsonplaceholder.typicode.com/posts');
        };
       

        return myService;

    });


})();