$(document).ready(function() {
	$('.home').fadeIn(800);
	intro();

	// $("video").on('loadstart', function (event) {
 //    $(this).css("border", "solid 10px black");
 //    $(this).addClass('loading');
 //  });
 //  $("video").on('canplay', function (event) {
 //    $(this).removeClass('loading');
 //  });
});

function intro() { 
	$('.line').css("width", "0");
	$('.line').animate({ width: '100%' }, 3000, function() {
		$('.home').fadeIn(800);
	});
};

