var portfolio = angular.module('portfolio', ['ui.router']);

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

portfolio.controller('headerCtrl', function($scope, animations) {
	$scope.backHide = function() { 
		$('.navbar-left').removeClass("offset");	
	};
	$scope.backShow = animations.backShow;
});

var executed = false;

portfolio.controller('homeCtrl', function(getData, $scope, animations) {
	if (!executed) {
		executed = true;
		intro();
	}
	function intro() { 
		$('.home').hide();
		$('.line').css("width", "0");
		$('.line').animate({ width: '100%' }, 3000, function() {
			$('.home').fadeIn(800);
		});
	};
	$scope.projects = getData;
	$scope.backShow = animations.backShow;		
});

portfolio.controller('contactCtrl', function($scope, animations) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { // https://stackoverflow.com/questions/18961332/angular-ui-router-show-loading-animation-during-resolve-process
		$('.navbar-left').addClass("offset");
	});
});

portfolio.controller('aboutCtrl', function($scope) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$('.navbar-left').addClass("offset");
	});	
});

portfolio.controller('projectCtrl', function($http, $scope, $stateParams, animations) {
	var name = $stateParams.name;
	$http.get('projects.json').then(function(res) {
		var result = $.grep(res.data, function(e){ return e.name == name; }); // http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
		$scope.project = result[0];
	});
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$('.project').fadeIn(800); 
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