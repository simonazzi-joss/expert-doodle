'use strict';

/**
 * @ngdoc overview
 * @name testsApp
 * @description
 * # testsApp
 *
 * Main module of the application.
 */

function RoutingConfigurator($routeProvider) {
  $routeProvider
    .when('/', {
		redirectTo: 'home'
	})
	.when('/home', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
    })
    .when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'ctrl'
    })
    .otherwise({
    	templateUrl: 'views/404.html',
    });
}

angular
  	.module('testsApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(RoutingConfigurator);
