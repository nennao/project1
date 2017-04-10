angular.module("ProjectDirective", [])

	.directive("hex", function() {
		return {
			restrict: "EA", 
			templateUrl: "templates/directives/hex.html"
		};
	});