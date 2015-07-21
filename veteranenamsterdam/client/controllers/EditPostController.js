angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

  $scope.editPost = true;
	
  console.log('EditPostController Init');

  var title = $stateParams.postId;


  console.log(title)
  $scope.posts = $meteor.collection(function(){

  	console.log('get post'); 

  	return Posts.find({title: title}, {})
  }); 

  console.log($scope.posts)


  $scope.editPost = function() {

      alert('edit')

  }
   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)


  

}]);



