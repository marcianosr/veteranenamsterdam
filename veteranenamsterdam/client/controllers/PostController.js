angular.module('VA')
.controller('PostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

	
  console.log('PostController Init');

  var title = $stateParams.postId;


  $scope.posts = $meteor.collection(function(){

  	console.log('get post'); 

  	return Posts.find({title: title}, {})
  }); 

}]);



