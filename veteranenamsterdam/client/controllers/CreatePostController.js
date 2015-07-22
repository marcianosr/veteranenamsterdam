angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', '$http', '$sce', function($rootScope, $scope, $location, $http, $sce) {


		$scope.errorForm = true;
		$scope.uploadImage = false;
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

				$sce.trustAsHtml($scope.post.message)



				if($scope.uploadImage) {
					console.log(' upload a pic')
					$scope.post.image_id = $scope.image_id;
				
				}
				else {
					console.log('do not upload')
				}

				console.log($scope.post)



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
				  message: $('textarea').val().replace($scope.bbcode.bold, $scope.html.bold)
				  							  .replace($scope.bbcode.italic, $scope.html.italic)
				  							  .replace($scope.bbcode.linebreak, function(a, b, p){ 

				  							  		// console.log(a)
				  							  		// console.log(b)
				  							  		// console.log(c)

				  							  		var paragraphs = p.split("\n");

				  							  		console.log(paragraphs)

				  							  		_.each(paragraphs, function(paragraph) { 

				  							  			console.log(paragraph)

				  							  		});

				  							  }),

				  date: new Date(),
				  author: $rootScope.currentUser.emails[0].address,

			};

			console.log($scope.post.message)


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

	$scope.uploadFile = function(event) {

			FS.Utility.eachFile(event, function(file) {
	      		Images.insert(file, function (err, fileObj) {
		        	// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP

		        	console.log('insert')
							console.log(err)
		        	console.log(fileObj)
		        	console.log(event.target.files)
		        	console.log(fileObj.url({store:"images"}));
		        	console.log(new FS.File(fileObj).url({store:"images"}));

					$scope.image_id = fileObj._id;
							
		     	});
	     	});

			$scope.uploadImage = true;
	}

	$scope.deleteFile = function() { 

		if($scope.uploadImage) { 

			Images.remove({ _id: $scope.image_id })
			$scope.uploadImage = false;

		}

	}

}]);

