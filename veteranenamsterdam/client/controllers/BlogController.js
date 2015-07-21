angular.module('VA')
.controller('BlogController', ['$scope', '$meteor', function($scope, $meteor) {


  console.log('BlogController Init');


  $scope.posts = $meteor.collection(function(){

  	console.log('get blog posts');

  	return Posts.find({ }, { })
  });

   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)



}]);
