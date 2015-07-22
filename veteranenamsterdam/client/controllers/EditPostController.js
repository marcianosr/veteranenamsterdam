angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

  $scope.editPost = true;
	
  console.log('EditPostController Init');

  var title = $stateParams.postId;


  console.log(title)
  // $scope.posts = $meteor.collection(function(){

  // 	console.log('get post'); 

  //   // find where the title is equal to the title in the db 
  // 	return Posts.find({title: title}, {})
  // }); 



  $scope.posts = $meteor.object(Posts, { title: title})
  console.log($scope.posts)


  $scope.editPost = function() {

      $scope.post = {
          title: $('input[name="title"]').val(),
          intro: $('input[name="intro"]').val(),
          message: $('textarea').val(),


      };

      console.log($scope.post.message)

      Posts.update({ _id: $scope.posts._id }, { $set: { title: $scope.post.title, intro: $scope.post.intro, message: $scope.post.message } } )

  }
   $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   console.log($scope.images)


  

}]);



