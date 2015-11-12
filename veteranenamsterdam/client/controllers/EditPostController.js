angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', '$location', '$sce', 'PostService', function($scope, $meteor, $stateParams, $location, $sce, PostService) {

  $scope.editPost = true;
  $scope.textareaCustom = [];
  $scope.paragraphs = [];

  $scope.counter = 0;

  console.log('EditPostController Init');

  var title = $stateParams.postId;


  console.log(title)
  // $scope.posts = $meteor.collection(function(){

  // 	console.log('get post');

  //   // find where the title is equal to the title in the db
  // 	return Posts.find({title: title}, {})
  // });



  $scope.posts = PostService.getAllPosts().then(function(posts) {
    angular.forEach(posts, function(key, value){
      console.log(title)
      console.log(key.slug)
      if(title === key.slug) {
        console.log(posts)
        $scope.post = key;
        $scope.message = $('#summernote').code($scope.post.message);
        console.log($scope.post)
        console.log(key)
      }



    });


  });
  console.log($scope.posts)


  // _.each($scope.posts.message, function(message){
  //     var last = $('textarea').last();

  //     last.after(function(){

  //       return '<p>'+ message +'</p>';
  //     });

  // })


  $scope.editPost = function() {

      $scope.errors = [];
      $scope.newPost = {
          title: $('input[name="title"]').val(),
          intro: $('input[name="intro"]').val(),
          message: $('#summernote').code()


      };
      console.log($scope.post._id)

      if($scope.newPost.title.length < 1) {

        $scope.errors.push('Het titel veld is leeg.');
      }


      if($scope.newPost.intro.length < 1) {

        $scope.errors.push('Het intro veld is leeg.');

      }

      if($('.note-editable.panel-body').text().length < 1) {

        $scope.errors.push('Het bericht veld is leeg.');

      }

      if($scope.errors.length != 0) {

        $scope.errorForm = true;
        return false;

      }
      else {
        Posts.update({ _id: $scope.post._id }, { $set: { title: $scope.newPost.title, intro: $scope.newPost.intro, message: $scope.newPost.message } } )

        $location.path('/blog')

      }



  }




}]);
