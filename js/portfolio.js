var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
		resolve: {
			getData: function($http) {
				return $http.get('js/projects.json').then(function(res) {
					return res.data;
				});
			}
		}
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactCtrl',
	})
	.state('project', {
		url: '/project/:name',
		templateUrl: 'views/project.html',
		controller: 'projectCtrl',
		onEnter: function(animations){
			animations.backShow;
		},
	})
	$urlRouterProvider.otherwise('/');
});

portfolio.controller('headerCtrl', function($scope, animations) {
	$scope.backHide = function() { 
		$('.back-icon').fadeOut(100).css("transform", "translateX(-40px)");
		$('.move-right').css("transform", "translateX(0)");
		//When page is loaded then fadeIn
		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { // https://stackoverflow.com/questions/18961332/angular-ui-router-show-loading-animation-during-resolve-process
			$('.home').fadeIn(800); 
		});		
	};
	$scope.backShow = animations.backShow;
});

portfolio.controller('homeCtrl', function(getData, $scope, animations) {
	$scope.projects = getData;
	$scope.backShow = animations.backShow;
});

portfolio.controller('contactCtrl', function($scope, animations) {
	animations.backShow;
});

portfolio.controller('projectCtrl', function($http, $scope, $stateParams, animations) {
	var name = $stateParams.name;
	$http.get('js/projects.json').then(function(res) {
		var result = $.grep(res.data, function(e){ return e.name == name; }); // http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
		$scope.project = result[0];
	});
});

portfolio.service('animations', function() {
	this.backShow = function() {
		$('.back-icon').fadeIn(100).css("transform", "translateX(0)");
		$('.move-right').css("transform", "translateX(30px)");
	}
});

portfolio.directive("preview", function() {
	return {
		restrict: "A",
		link: function(scope, elem, attrs) {
			var figure = $(".preview-thumb").hover( hoverVideo, hideVideo );

			function hoverVideo(e) {  
				$('video', this).get(0).play(); 
			}

			function hideVideo(e) {
				$('video', this).get(0).pause(); 
			}
		}
	}
});