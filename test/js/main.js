var va = angular.module('VA', ['ngRoute']);

// config func runs before anything is ready (before all services are ready) Providers are accessible. 
va.config([

	'$routeProvider',

	 function($routeProvider) { 


		console.log($routeProvider)

		$routeProvider.when('/', { 

			controller: 'LandingController', 
			templateUrl: 'html/views/LandingView.html'
		})
}]);

