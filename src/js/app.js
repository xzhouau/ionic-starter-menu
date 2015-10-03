// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = {
	controllers: angular.module('starter.controllers', []),
	services: angular.module('starter.services', []),
	filters: angular.module('starter.filters', [])
};

starter.app = angular.module('starter', [
	'ionic',
	'ionic-material',
	'starter.controllers',
	'starter.services',
	'starter.filters',
	'ngCordova'
])

.run(function($ionicPlatform, $rootScope) {
	$rootScope.VERSION = window.VERSION;
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	.state('home', {
		url: '/',
		views: {
			home: {
				templateUrl: 'templates/home.html'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');

});
