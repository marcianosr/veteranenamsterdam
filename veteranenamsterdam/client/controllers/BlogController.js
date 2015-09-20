angular.module('VA')
.controller('BlogController', ['$scope', '$meteor', 'PostService', function($scope, $meteor, PostService) {


  console.log('BlogController Init');

  $scope.posts = PostService.getAllPosts().then(function(posts) {
      $scope.posts = posts;
  });
  // $scope.posts = $meteor.collection(function(){
  //
  // 	console.log('get blog posts');
  //
  // 	return Posts.find({ }, { })
  // });

   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)



}]);
