var portfolio = angular.module('portfolio', ['ui.router', 'pascalprecht.translate']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
		resolve: {
			getData: function($http) {
				return $http.get('projects.json').then(function(res) {
					return res.data;
				});
			}
		}
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactCtrl'
	})
	.state('project', {
		url: '/project/:name',
		templateUrl: 'views/project.html',
		controller: 'projectCtrl',
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl',
		onExit: function(){$(".about").fadeOut(800);}
	})
	.state('feedback', {
		url: '/feedback',
		templateUrl: 'views/feedback.html',
	})
	$urlRouterProvider.otherwise('/');
});

portfolio.controller('contactCtrl', function($scope, animations) {
	$('.navbar-left').addClass("offset");
});

portfolio.service('animations', function() {
	this.backShow = function() {
		$('.navbar-left').addClass("offset");
	}
});

portfolio.directive("playonhover", function() {
	return {
		restrict: "A",
		link: function(scope, elem, attrs) {
			$(".preview-thumb").hover(function () {
				$(this).children("video")[0].play();
			}, function () {
				$(this).children("video")[0].pause();
			});
		}
	}
});