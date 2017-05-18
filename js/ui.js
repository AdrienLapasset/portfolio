$(document).ready(function() {
	$('.home').hide();
	$('.line').css("width", "0");
	$('.line').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn('slow');
	});
});