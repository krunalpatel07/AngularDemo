var appControllers = angular.module('appControllers',[
]);

appControllers.controller('driverController',function($scope,apiServices){
	// $scope.driverList = [
      // {
          // Driver: {
              // givenName: 'Sebastian',
              // familyName: 'Vettel'
          // },
          // points: 322,
          // nationality: "German",
          // Constructors: [
              // {name: "Red Bull"}
          // ]
      // },
      // {
          // Driver: {
          // givenName: 'Fernando',
              // familyName: 'Alonso'
          // },
          // points: 207,
          // nationality: "Spanish",
          // Constructors: [
              // {name: "Ferrari"}
          // ]
      // }
    // ];
    apiServices.getDrivers().success(function(response){
    	 $scope.driverList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    	 console.log($scope.driversList);
    }).error(function(response){
    	console.log(response);
    });
    
});

appControllers.controller('todoController',function($scope){
    $scope.todoInputVal = null;
    $scope.todoClicked = function(){
        $scope.todoValue = $scope.todoInputVal;
    };
});

appControllers.controller('postController', function($scope,formSubmitServices){
    $scope.user = {};
    $scope.userFormSubmit = function(){
        formSubmitServices.submitForm().success(function(data){
           console.log(data);
        });
    }
});
