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
		url: '/project/:name',
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
	$('.move-right').css("transform", "translateX(0)");
	$('.home').hide();
	$('.home').fadeIn(800);
});

portfolio.controller('contactCtrl', function($scope) {
	//jquery
	$('.back-icon').fadeIn(100).css("transform", "translateX(0)");
	$('.move-right').css("transform", "translateX(30px)");
	$('.project').hide();
	$('.project').fadeIn(800);
});

portfolio.controller('projectCtrl', function($http, $scope, $stateParams) {
	var name = $stateParams.name;
	$http.get('js/projects.json').then(function(res) {
		var result = $.grep(res.data, function(e){ return e.name == name; }); //http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
		$scope.project = result[0];
	});
	//jquery
	$('.back-icon').fadeIn(100).css("transform", "translateX(0)");
	$('.move-right').css("transform", "translateX(30px)");
	$('.project').hide();
	$('.project').fadeIn(800);
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