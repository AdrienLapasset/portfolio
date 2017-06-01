var executed = false;

portfolio.controller('homeCtrl', function(getData, $scope, animations) {
	if (!executed) {
		executed = true;
		intro();
	}
	$scope.projects = getData;
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$('.navbar-left').removeClass("offset");
	});
});

function intro() { 
	$('.home').hide();
	$('.line').css("width", "0");
	$('.line').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn(800);
	});
};