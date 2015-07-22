angular.module('VA')
.controller('PostController', ['$scope', '$meteor', '$stateParams', '$sce', function($scope, $meteor, $stateParams, $sce) {

	
  console.log('PostController Init');
  console.log($sce);

  var title = $stateParams.postId;


  $scope.posts = $meteor.collection(function(){

  	console.log('get post'); 

  	return Posts.find({title: title}, {})
  }); 

}]);



