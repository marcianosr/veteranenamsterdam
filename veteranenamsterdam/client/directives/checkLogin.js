angular.module('VA').directive('checkLogin', ['$rootScope', '$location', function($rootScope, $location) { 


   		   $rootScope.$on('$stateChangeStart', function(){

			      if ($rootScope.userId && $location.path().indexOf('/inloggen') !== -1 ) {

					   return $location.path('/');
   				}

   				if (!$rootScope.userId && $location.path().indexOf('/maak-bericht') !== -1) { 

                  console.warn('Not allowed to reach this pgage' )
   					return $location.path('/inloggen');
   				}



	  		});


		 return {};
   	
}]);
