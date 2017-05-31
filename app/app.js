(function() {
    'use strict';
    angular.module("dustbinApp", ['ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.pagination']).config(function($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) {

    	$stateProvider.state('main', {
            url: '/main',
            templateUrl: 'app/main/main.html',
            controller: "MainController"

        }).state('main.home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: "HomeController",
            controllerAs:"home"

        }).state('main.normal', {
            url: '/normal',
            templateUrl: 'app/normal/normal.html',
            controller: "NormalController",
            controllerAs:"normal"

        });
        $urlRouterProvider.otherwise('/main/home');
        //$locationProvider.html5Mode(false);



    });


    console.log("onload called");
})();