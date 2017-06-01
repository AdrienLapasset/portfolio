portfolio.controller('projectCtrl', function($http, $scope, $stateParams, animations) {
	var name = $stateParams.name;
	$http.get('projects.json').then(function(res) {
		var result = $.grep(res.data, function(e){ return e.name == name; }); // http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
		$scope.project = result[0];
	});
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$('.navbar-left').addClass("offset");
		$('.project').fadeIn(800); 
	});		
});