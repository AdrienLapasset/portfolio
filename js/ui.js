$(document).ready(function() {
	$('.home').hide();
	$('.progress').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn('slow');
	});
});