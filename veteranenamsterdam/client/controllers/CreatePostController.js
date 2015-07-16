angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {


		$scope.errorForm = true;

		$scope.createPost = function() {

			var post = $scope.validate(); 
			console.log(post)

		 
			if(post && !$scope.errorForm) { 
				console.log('succes')

				post._id = Posts.insert(post);

			}
			else {
				console.log('not succes')

			}

			 
		}; 


		$scope.validate = function() { 

			$scope.errors = [];

		   	var post = {
		    	  title: $('input[name="title"]').val(),
		    	  intro: $('input[name="intro"]').val(),
				  message: $('textarea').val(),
				  date: new Date(),
				  author: $rootScope.currentUser.emails[0].address
			};

			if(post.title.length < 1) { 

				$scope.errors.push('Het titel veld is leeg.');
			}

			if(post.message.length < 1) { 

				$scope.errors.push('Het bericht veld is leeg.');

			}

			if(post.intro.length < 1) { 

				$scope.errors.push('Het intro veld is leeg.');

			}
			console.log($scope.errors.length)
			if($scope.errors.length != 0) { 

				$scope.errorForm = true;
				return false;

			}
			else { 
				console.log('postting')
				
				
				$scope.errorForm = false;

				return post;

			}

		}



}]);
