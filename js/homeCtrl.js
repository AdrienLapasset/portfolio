var pageLoaded = false;

portfolio.controller('homeCtrl', function(getData, $scope, animations) {
	$scope.projects = getData;
	
	if (!pageLoaded) {
		pageLoaded = true;
		intro();
	}

	else {
		$('.home').fadeIn(800);
	}

	$('.navbar-left').removeClass("offset");
});

function intro() { 
	$('.line').css("width", "0");
	$('.line').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn(800);
	});
};