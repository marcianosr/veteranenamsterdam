angular.module('VA')
.controller('LoginController', ['$rootScope', '$scope', '$state', 'LoginService', function($rootScope, $scope, $state, LoginService) {


   console.log('LoginController Init');

   $scope.formError = true;

   $rootScope.userId = LoginService.getLoginStatus();
   $scope.loggedIn = LoginService.getLoginStatus();

   $scope.empty = true;

        //  Accounts.createUser({email: 'marciano_schildmeijer@live.nl', password : 'kazooie'}, function(err){
        //   if (err) {
        //     // Inform the user that account creation failed
        //   } else {
        //     // Success. Account has been created and the user
        //     // has logged in successfully.
        //   }

        // });
        //

					// console.log(Posts.find().fetch())
		$scope.validate = function (user, reason) {

				console.log(reason)

				switch (reason) {
					case "User not found":
						$scope.errors.push('Sorry, we hebben de zojuist ingetypte gebruiker niet kunnen vinden...');
					break;
					case "Match failed":

					break;

				}

				if (user.username.length < 1 || user.password.length < 1) {
					$scope.errors.push('De gebruikersnaam en/of wachtwoord is niet ingevuld.')
					$scope.formError = true;

				}




		}

   $scope.submitForm = function ( ) {

         $scope.errors = []

				var user = {

					username: $('input[name="username"').val(),
					password: $('input[name="password"').val(),
				}



				// Meteor.call(
				// 	"checkIfUserExist",
				// 	user.username,
				// 	function(error, result) {
				// 			if(error) {
				// 				console.log(error.reason);
				// 				return;
				// 			}
				// 			alert("result = " + result);  // Returns the result computed on the server
				// 			if(!result) {
				// 				// Execute remaining code if user does not exist.
				// 			}
				//
				//
				// 	});



         Meteor.loginWithPassword(user.username, user.password, function(err){
               if (err) {

                  console.log(err)
									$scope.validate(user, err.reason)

               }
               else {
                  $rootScope.userId = Meteor.userId();
               }

            });

         // EMAIL CHECK
         // NO USER FOUND


         if($scope.formError) {

            pushArrayOnce($scope.errors)
         }
         else {

            console.log('push to datãbase! User created!')
         }


   }


   function pushArrayOnce(array) {

    	var unique = [];

		$.each(array, function(i, error) {

         console.log(error)
			if(array.indexOf(error) !== i) {

				return;
			}
			else {
				unique.push(error)
			}
		});

		$scope.errors = unique;

   }



}]);
