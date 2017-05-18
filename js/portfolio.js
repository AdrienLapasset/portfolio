var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactCtrl',
	})
	.state('project', {
		url: '/project/:id',
		templateUrl: 'views/project.html',
		controller: 'projectCtrl',
	})
	$urlRouterProvider.otherwise('/');
});

portfolio.controller('homeCtrl', function($http, $scope) {
	$http.get('js/projects.json').then(function(res) {
		$scope.projects = res.data;
	});
	//jquery
	$('.back-icon').fadeOut(100).css("transform", "translateX(-40px)");
	$('h1').css("transform", "translateX(0)");
	$('.home').hide();
	$('.home').fadeIn('slow');
});

portfolio.controller('contactCtrl', function($scope) {
	
});

portfolio.controller('projectCtrl', function($http, $scope, $stateParams) {
	var id = $stateParams.id;
	$http.get('js/projects.json').then(function(res) {
		$scope.project = res.data[id];
	});
	//jquery
	$('.back-icon').fadeIn(100).css("transform", "translateX(0)");
	$('h1').css("transform", "translateX(40px)");
	$('.project').hide();
	$('.project').fadeIn('slow');
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