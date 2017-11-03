portfolio.controller('navCtrl', function ($scope, animations, $translate) {
	var toggle = false;

	$scope.onMouseToggle = function () {
		$scope.toggle = !$scope.toggle;
	}

	$scope.backHide = function () {
		$('.navbar-left').removeClass("offset");
	};
	$scope.backShow = animations.backShow;

	$('.en').addClass('show');

	$scope.changeLanguage = function (langKey) {
		if (langKey === 'fr') {
			$('.fr').removeClass('show');
			$('.en').addClass('show');
		}
		if (langKey === 'en') {
			$('.en').removeClass('show');
			$('.fr').addClass('show');
		}

		$translate.use(langKey);
	};

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('nav').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('nav').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('nav').removeClass('nav-up').addClass('nav-down');
			}
		}
		lastScrollTop = st;
	}
});