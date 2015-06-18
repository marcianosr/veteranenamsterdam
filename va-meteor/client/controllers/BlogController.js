angular.module('VA')
.controller('BlogController', ['$scope', '$meteor', function($scope, $meteor) {

	
  console.log('BlogController Init');


  $scope.posts = $meteor.collection(Posts); 

  console.log($scope.posts)

  

}]);



