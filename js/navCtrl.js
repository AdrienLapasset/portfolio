portfolio.controller('navCtrl', function($scope, animations, $translate) {
	$scope.backHide = function() { 
		$('.navbar-left').removeClass("offset");	
	};
	$scope.backShow = animations.backShow;

	console.log($translate.use());
	$('.en').addClass('show');

	$scope.changeLanguage = function(langKey) {
		if(langKey === 'fr') {
			$('.fr').removeClass('show');
			$('.en').addClass('show');
		}
		if(langKey === 'en') {
			$('.en').removeClass('show');
			$('.fr').addClass('show');
		}

		$translate.use(langKey);
	};
});