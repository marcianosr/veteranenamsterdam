angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', '$http', '$sce', function($rootScope, $scope, $location, $http, $sce) {


		$scope.errorForm = true;
		$scope.uploadImage = false;
		$scope.textareaCustom = [];
		$scope.counter = 0;

		$scope.post = {};

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
						slug: $('input[name="title"]').val().split(" ").join("-").toLowerCase(),
		    	  intro: $('input[name="intro"]').val(),
				  message: $('#summernote').code(),
				  date: moment().locale('nl').format("ll"),
					datetime: moment().locale('nl').format('MMMM Do YYYY, h:mm:ss a'),
				  // author: $rootScope.currentUser.emails[0].address,
					author: $rootScope.currentUser.username

			};


			if($scope.post.title.length < 1) {

				$scope.errors.push('Het titel veld is leeg.');
			}
			console.log($('.note-editable.panel-body').html())


			if($scope.post.intro.length < 1) {

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
				console.log('postting')
				$scope.errorForm = false;

				return $scope.post;

			}

		}


}]);
