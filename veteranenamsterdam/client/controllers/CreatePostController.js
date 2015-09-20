angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', '$http', '$sce', function($rootScope, $scope, $location, $http, $sce) {


		$scope.errorForm = true;
		$scope.uploadImage = false;
		$scope.textareaCustom = [];
		$scope.counter = 0;

		$scope.post = {};

		$scope.bbcode = {

			bold: /(\[b\])(.*?)(\[\/b\])/,
			italic: /(\[i\])(.*?)(\[\/i\])/,
			linebreak: /\n/g,
		};
		$scope.html = {

			bold: "<strong>$2</strong>",
			italic: "<i>$2</i>",
			linebreak: "<br>"
		}

		$scope.createPost = function() {

			var post = $scope.validate();
			console.log(post)



			if(post && !$scope.errorForm) {
				console.log('succes')

				//$sce.trustAsHtml($scope.post.message)

				post._id = Posts.insert($scope.post);
				$location.path('/blog')

			}
			else {
				console.log('not succes')

			}
		};

		$scope.validate = function() {

			$scope.errors = [];

		   	$scope.post = {
		    	  title: $('input[name="title"]').val(),
		    	  intro: $('input[name="intro"]').val(),
				  message: $('#summernote').code(),
				  date: new Date(),
				  author: $rootScope.currentUser.emails[0].address,

			};


			if($scope.post.title.length < 1) {

				$scope.errors.push('Het titel veld is leeg.');
			}

			if($scope.post.message.length < 1) {

				$scope.errors.push('Het bericht veld is leeg.');

			}

			if($scope.post.intro.length < 1) {

				$scope.errors.push('Het intro veld is leeg.');

			}

			if($scope.errors.length != 0) {

				$scope.errorForm = true;
				return false;

			}
			else {
				console.log('postting')
				$scope.errorForm = false;

				return $scope.post;

			}

		}

	$(document).ready(function() {
	  $('#summernote').summernote({ height: 400});
	});

}]);
