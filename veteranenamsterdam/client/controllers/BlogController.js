angular.module('VA')
.controller('BlogController', ['$scope', '$meteor', 'PostService', function($scope, $meteor, PostService) {


  console.log('BlogController Init');

  $scope.posts = PostService.getAllPosts().then(function(posts) {
      
      $scope.posts = posts;



      angular.forEach($scope.posts, function(key, value){

        var str = key.message;
        //filter img of the post message
        var regex = /<img.*?src="(.*?)"/;
        var src = regex.exec(str);

       if(src) {
         $scope.posts[value].imgUrl = src[1];
       }


      });
  });




  //
  // $('article').find('h1').css('color', 'red');
  //
  // console.log($('aside').find('time'))

  // $scope.posts = $meteor.collection(function(){
  //
  // 	console.log('get blog posts');
  //
  // 	return Posts.find({ }, { })
  // });

   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)



}]);
