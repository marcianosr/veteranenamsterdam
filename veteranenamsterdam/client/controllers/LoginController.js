angular.module('VA')
.controller('LoginController', ['$scope', function($scope) {

	
   console.log('LoginController Init');

   $scope.errors = []
   $scope.formError = true;
   $scope.empty = true;

   $("form").submit(function(){ 

   		var user = { 

		   username: $('input[name="username"').val(),
 		   password: $('input[name="password"').val(),
   		}

   		if (user.username === "" || user.password === "") { 

   			$scope.errors.push({'empty': 'De gebruikersnaam en/of wachtwoord is niet ingevuld.'})
   			$scope.formError = true;
   			return $scope.formError;
   		}

   		// EMAIL CHECK
   		// NO USER FOUND
   		// 
   		
   		$scope.formError = false;
   		

   		if($scope.formError) { 

   			pushArrayOnce($scope.errors)
   		}
   		else { 

   			console.log('push to datãbase! User created!')
   		}



   });	


   function pushArrayOnce(array) { 

    	var unique = [];

		$.each(array, function(i, error) { 

			if(array.indexOf(error)) {

				return;
			}
			else { 
				unique.push(error)
			}
	
					
		});

		$scope.errors = unique;

   }



}]);