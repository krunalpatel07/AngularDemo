var App = angular.module('myApp',[
	'appControllers',
	'appServices',
	'appDirectives',
	'ngRoute'
]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/drivers',{templateUrl:  "partials/drivers.html", controller: "driverController"}).
		when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
		when("/todoapp", {templateUrl: 'partials/todoapp.html', controller: "todoController"}).
		when("/formSubmitApp", {templateUrl: 'partials/formSubmitApp.html', controller: "postController"}).
		otherwise({redirectTo : '/drivers'});
}]);
