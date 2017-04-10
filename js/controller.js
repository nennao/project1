angular.module("RouteControllers", [])

	.controller("HomeController", function() {
		// initialise carousel
		$('#home-carousel').carousel('cycle');

		// toggle events display
		$('.hex1 hex, .hex1 .frontTxt, .hex1 .backTxt').on('click', function() {
			$('.hex1 .hexImg').toggleClass('hexFade');
	    	$('.hex1 .frontTxt, .hex1 .backTxt').fadeToggle();
		});
		$('.hex2 hex, .hex2 .frontTxt, .hex2 .backTxt').on('click', function() {
			$('.hex2 .hexImg').toggleClass('hexFade');
	    	$('.hex2 .frontTxt, .hex2 .backTxt').fadeToggle();
		});
		$('.hex3 hex, .hex3 .frontTxt, .hex3 .backTxt').on('click', function() {
			$('.hex3 .hexImg').toggleClass('hexFade');
	    	$('.hex3 .frontTxt, .hex3 .backTxt').fadeToggle();
		});
		
	});









