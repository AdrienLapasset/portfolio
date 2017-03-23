var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
	})
	$urlRouterProvider.otherwise('/');
});

portfolio.controller('navCtrl', function() {

});

portfolio.controller('homeCtrl', function($http, $scope) {
	$http.get('js/projects.json').then(function(res) {
		$scope.projects = res.data;
	});
});

portfolio.directive("preview", function() {
	return {
		restrict: "A",
		link: function(scope, elem, attrs) {
			var figure = $(".preview").hover( hoverVideo, hideVideo );

			function hoverVideo(e) {  
				$('video', this).get(0).play(); 
			}

			function hideVideo(e) {
				$('video', this).get(0).pause(); 
			}
		}
	}
});