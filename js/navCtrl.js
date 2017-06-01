portfolio.controller('navCtrl', function($scope, animations) {
	$scope.backHide = function() { 
		$('.navbar-left').removeClass("offset");	
	};
	$scope.backShow = animations.backShow;
});