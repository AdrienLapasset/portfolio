	$(document).ready(function() {
		intro();
	});

function intro() { 
	$('.home').css("display", "none");
	$('.line').css("width", "0");
	$('.line').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn(800);
	});
};