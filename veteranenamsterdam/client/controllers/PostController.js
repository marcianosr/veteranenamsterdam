angular.module('VA')
.controller('PostController', ['$scope', '$meteor', '$stateParams', '$sce', 'PostService', function($scope, $meteor, $stateParams, $sce, PostService) {


  console.log('PostController Init');
  console.log($sce);

  var title = $stateParams.postId;

	$scope.posts = PostService.getAllPosts().then(function(posts) {

		angular.forEach(posts, function(key, value){


			if (title === key.slug) {
					$scope.post = key;
					$scope.message = $sce.trustAsHtml($scope.post.message);

					console.log($scope.post)

          
			}

		});


	});
	// $meteor.subscribe('posts').then(function(res, err){
	//
	// 		console.log(res)
	// })
  // $scope.posts = $meteor.collection(function(){
	//
  // 	console.log('get post');
	//
  // 	return Posts.find({title: title}, {})
  // });



}]);
