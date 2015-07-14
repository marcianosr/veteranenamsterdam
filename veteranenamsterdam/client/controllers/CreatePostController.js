angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {


	 if (!$rootScope.userId) {

			return $location.path('/inloggen');
	}
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
