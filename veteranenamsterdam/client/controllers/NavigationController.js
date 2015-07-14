angular.module('VA')
.controller('NavigationController', ['$rootScope', '$scope', 'LoginService', function($rootScope, $scope, LoginService) {


  console.log('NavigationController Init');

	   $scope.$on('$stateChangeStart', function(){

		 //  	var loggedIn = LoginService.getLoginStatus();
		 //  	console.log('start ', loggedIn)


			// if(loggedIn) { 

			// 	console.log('Logged in')
			// 	$scope.loggedIn = true;
			// }
			// else { 
			// 	console.log('not logged in')
			// }

	  //  		console.log('routechange: ', loggedIn)

	  });


	   $scope.logout = function () { 
	   		return LoginService.logout();
	   	}
}]);



