angular.module('VA')
.controller('BlogController', ['$scope', '$meteor', function($scope, $meteor) {


  console.log('BlogController Init');





  $scope.posts = $meteor.collection(function(){

  	console.log('get blog posts');



  	return Posts.find({ }, { })
  	// return Posts.find({ image_id:"qY6wKApfiPfPo72wK" }, { })
  });

   // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   // console.log($scope.images)



}]);

// Template.imageView.helpers({
//   images: function () {

// 	// var image_id =	Posts.find({image_id: true})
// 	// console.log(image_id)

//   	//  return Images.find({_id: image_id );
// 		// console.log(Images.find().fetch()[0].url())

// 	// console.log(Images.find().fetch())

//     return Images.find({}, {}); // Where Images is an FS.Collection instance
//   }
// });
