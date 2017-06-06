angular.module("RouteControllers", [])

	.controller("HomeController", function() {
		// initialise carousel
		$('#home-carousel').carousel('cycle');

		// toggle events display
		$('.hex1 .hexagon, .hex1 .hexClick, .hex1 .backTxt').click(function() {
	    	$('.hex1 .frontTxt, .hex1 .backTxt').fadeToggle();
		});
		$('.hex2 .hexagon, .hex2 .hexClick, .hex2 .backTxt').click(function() {
	    	$('.hex2 .frontTxt, .hex2 .backTxt').fadeToggle();
		});
		$('.hex3 .hexagon, .hex3 .hexClick, .hex3 .backTxt').click(function() {
	    	$('.hex3 .frontTxt, .hex3 .backTxt').fadeToggle();
		});
		
	});









