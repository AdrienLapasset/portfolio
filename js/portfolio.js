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
		controller: 'aboutCtrl'
	})
	.state('feedback', {
		url: '/feedback',
		templateUrl: 'views/feedback.html',
	})
	$urlRouterProvider.otherwise('/');
});

portfolio.controller('contactCtrl', function($scope, animations) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { // https://stackoverflow.com/questions/18961332/angular-ui-router-show-loading-animation-during-resolve-process
		$('.navbar-left').addClass("offset");
	});
});

portfolio.controller('aboutCtrl', function($scope) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$('.navbar-left').addClass("offset");

		// Sensitive portrait
		var mouseX;
		var mouseY;
		var greyscale;
		var alpha = 100;
		$(document).mousemove( function(e) {
			mouseX = (e.pageX - $(window).width() / 2) / alpha; 
			mouseY = (e.pageY - $(window).height() / 2) / alpha;
			greyscale = (-e.pageY + $(window).height()) / $(window).height() * 100;
			$(".portrait").css({"transform": "rotate3d(0, 1, 0, " + mouseX + "deg) rotate3d(-1, 0, 0, " + mouseY + "deg) translate3d(" + mouseX + "px, " + mouseY + "px, 0)",
													"filter": "grayscale(" + greyscale + "%)"});
		});
	});	
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