angular.module("Project1", ["ngRoute", "RouteControllers", "ProjectDirective"]);

angular.module("Project1").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/workouts", {
		templateUrl: "templates/workouts.html",
		controller: "WorkoutsController"
	})
	.when("/bookings", {
		templateUrl: "templates/bookings.html",
		controller: "BookingsController"
	});

});