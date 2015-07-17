angular.module('VA')
.controller('PostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

	
  console.log('PostController Init');

  var title = $stateParams;


  console.log(title)
  $scope.posts = $meteor.collection(function(){

  	console.log('get post'); 

  	return Posts.find({}, {title: 'Zelda'})
  }); 

  console.log($scope.posts)

   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)

  

}]);



