portfolio.controller('aboutCtrl', function($scope) {
	$('.navbar-left').addClass("offset");

	// Sensitive portrait
	var mouseX;
	var mouseY;
	var greyscale;
	var alpha = 80;
	$(document).mousemove( function(e) {
		// le zéro est centré au millieu de l'écran
		mouseX = (e.pageX - $(window).width() / 2) / alpha; 
		mouseY = (e.pageY - $(window).height() / 2) / alpha;
		$(".portrait").css({"transform": "rotate3d(0, 1, 0, " + mouseX + "deg) rotate3d(-1, 0, 0, " + mouseY + "deg) translate3d(" + mouseX + "px, " + mouseY + "px, 0)"});
	});
});