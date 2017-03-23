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