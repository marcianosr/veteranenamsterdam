angular.module('VA').controller('SignupController', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

    console.log('SignupController');



    var input = {
        username : '',
        email : '',
        password: '',
    }

    $scope.validateEmail = function(email) {
        return /^[A-Z0-9.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }

    $scope.validateNewUser = function(){

      $scope.errors = [];

      $scope.form = {
            username: $('input[name="username"]').val(),
            email: $('input[name="email"]').val(),
            password: $('input[name="password"]').val(),
      };

      if ($scope.form.password < 3) {
          $scope.errors.push("Het wachtwoord is te kort.");
      }

      if ($scope.form.username < 3) {
          $scope.errors.push("De gebruikersnaam is te kort.");
      }

      if(!$scope.validateEmail($scope.form.email)){
        $scope.errors.push("Dit email adres is niet valide.");
      }



      if($scope.errors.length > 0) {
          console.log('form errors')
      }
      else {

        $meteor.call('validateSignup', $scope.form.email).then(function(emailExists){

              console.log(emailExists)
              if(emailExists){
                $scope.serverError = "Dit email adres bestaat al."
              }
              else {
                console.log('creation')
                $scope.serverError = null;

                $meteor.createUser({
                     email: $scope.form.email,
                     username: $scope.form.username,
                     password: $scope.form.password,


                  });

                  $state.go('/inloggen');


              }
        });



        // $meteor.call('validateSignup', $scope.form, function(error, user){
        //      console.log($scope.form);
        //       console.log(error);
        //
        //       $scope.serverError = error.reason;
        //
        //       console.log($scope.errors)
        //
        // });

      }


    }




}]);
