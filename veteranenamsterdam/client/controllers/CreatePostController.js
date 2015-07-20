angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', 'Upload', function($rootScope, $scope, $location, Upload) {


		$scope.errorForm = true;

		$scope.createPost = function() {

			var post = $scope.validate(); 
			console.log(post)

		 
			if(post && !$scope.errorForm) { 
				console.log('succes')

				post._id = Posts.insert(post);
				$location.path('/blog')

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

		$scope.upload = function(files) { 

			if (files && files.length) {
	            for (var i = 0; i < files.length; i++) {
	                var file = files[i];
	                console.log(file)
	                Upload.upload({
	                    url: '/uploads',
	                    // fields: {
	                    //     'username': $scope.username
	                    // },
	                    file: files
	                }).progress(function (evt) {
	                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                    $scope.log = 'progress: ' + progressPercentage + '% ' +
	                                evt.config.file.name + '\n' + $scope.log;
	                }).success(function (data, status, headers, config) {
	                    $timeout(function() {
	                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
	                    });
	                });
	            }
	        }
		}


		
}]);





