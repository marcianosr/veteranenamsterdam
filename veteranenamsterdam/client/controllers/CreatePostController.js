angular.module("VA").controller('CreatePostController', ['$scope', function($scope) {

	 $("form").submit(function(){
    
    var post = {
    	  title: $('input[name="title"]').val(),
    	  intro: $('input[name="intro"]').val(),
		  message: $('textarea').val(),
		};


		 post._id = Posts.insert(post);

		console.log(post)
	});



}]);