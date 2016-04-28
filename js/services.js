var appServices = angular.module('appServices',[]);

appServices.factory('apiServices', function($http){
	this.nameFilter = null;
	this.getDrivers = function(){
		return $http({
			method:'JSONP',
			url:'http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK'
		});
	};
	return this;
});
